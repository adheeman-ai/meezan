import { NgoStatus, CampaignStatus, Category, UserRole, PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';
import bcrypt from 'bcryptjs';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('🌱 Starting database seeding...');

    const hashedPassword = await bcrypt.hash('password123', 10);
    const adminPassword = await bcrypt.hash('Mizaan@2026!Admin', 10); // Example strong password

    // Clear existing data
    await prisma.campaignUpdate.deleteMany();
    await prisma.donation.deleteMany();
    await prisma.campaign.deleteMany();
    await prisma.user.deleteMany(); // Clear users
    await prisma.ngo.deleteMany();
    await prisma.district.deleteMany();

    console.log('✓ Cleared existing data');

    // Create Super Admin
    await prisma.user.create({
        data: {
            email: 'admin@mizaan.org',
            password: adminPassword,
            role: UserRole.SUPER_ADMIN,
        }
    });
    console.log('✓ Created Super Admin (madmin)');

    // Seed Districts - Kashmir Division (10 districts)
    const districtsData = [
        { name: 'Srinagar', isCapital: true },
        { name: 'Baramulla' },
        { name: 'Anantnag' },
        { name: 'Pulwama' },
        { name: 'Kupwara' },
        { name: 'Budgam' },
        { name: 'Bandipora' },
        { name: 'Ganderbal' },
        { name: 'Shopian' },
        { name: 'Kulgam' },
    ];

    const districts = await Promise.all(
        districtsData.map(d => prisma.district.create({ data: d }))
    );

    console.log(`✓ Created ${districts.length} districts`);

    // Seed NGOs
    const ngo1 = await prisma.ngo.create({
        data: {
            name: 'Kashmir Relief Foundation',
            nameUrdu: 'کشمیر ریلیف فاؤنڈیشن',
            registrationNumber: 'KRF-2020-001',
            districtId: districts[0].id, // Srinagar
            categories: JSON.stringify([Category.MEDICAL, Category.DISASTER]),
            email: 'contact@kashmirrelief.org',
            phone: '+91-9419012345',
            address: 'Lal Chowk, Srinagar, 190001',
            website: 'https://kashmirrelief.org',
            bankAccount: '1234567890',
            ifsc: 'SBIN0000123',
            accountHolder: 'Kashmir Relief Foundation',
            bankName: 'State Bank of India',
            upiId: 'kashmirrelief@sbi',
            status: NgoStatus.VERIFIED,
            documents: JSON.stringify({
                registrationCert: '/uploads/ngo1-reg.pdf',
                panCard: '/uploads/ngo1-pan.pdf',
                form80g: '/uploads/ngo1-80g.pdf',
                cheque: '/uploads/ngo1-cheque.jpg',
            }),
            verifiedAt: new Date(),
        },
    });

    // Create User for NGO 1
    await prisma.user.create({
        data: {
            email: ngo1.email,
            password: hashedPassword,
            role: UserRole.NGO_PARTNER,
            ngoId: ngo1.id
        }
    });

    const ngo2 = await prisma.ngo.create({
        data: {
            name: 'Chinar Education Trust',
            nameUrdu: 'چنار ایجوکیشن ٹرسٹ',
            registrationNumber: 'CET-2019-042',
            districtId: districts[1].id, // Baramulla
            categories: JSON.stringify([Category.EDUCATION, Category.ORPHAN]),
            email: 'info@chinaredu.org',
            phone: '+91-9419023456',
            address: 'Baramulla Town, 193101',
            bankAccount: '9876543210',
            ifsc: 'JAKA0000456',
            accountHolder: 'Chinar Education Trust',
            bankName: 'Jammu & Kashmir Bank',
            upiId: 'chinaredu@jkb',
            status: NgoStatus.VERIFIED,
            documents: JSON.stringify({
                registrationCert: '/uploads/ngo2-reg.pdf',
                panCard: '/uploads/ngo2-pan.pdf',
                cheque: '/uploads/ngo2-cheque.jpg',
            }),
            verifiedAt: new Date(),
        },
    });

    // Create User for NGO 2
    await prisma.user.create({
        data: {
            email: ngo2.email,
            password: hashedPassword,
            role: UserRole.NGO_PARTNER,
            ngoId: ngo2.id
        }
    });

    console.log('✓ Created 2 verified NGOs with partner users');


    // Seed Campaigns
    const campaign1 = await prisma.campaign.create({
        data: {
            ngoId: ngo1.id,
            title: 'Emergency Medical Equipment for Hospital',
            description: `The hospital urgently needs modern medical equipment to serve the growing population in Srinagar.`,
            category: Category.MEDICAL,
            goalAmount: 500000000, // ₹50,00,000 in paise
            deadline: new Date('2026-04-30'),
            imageUrl: '/images/campaigns/medical-equipment.jpg',
            upiId: 'kashmirrelief@sbi',
            bankAccount: '1234567890',
            ifsc: 'SBIN0000123',
            accountHolder: 'Kashmir Relief Foundation',
            bankName: 'State Bank of India',
            status: CampaignStatus.ACTIVE,
            verifiedAmount: 1500000, // ₹15,000
            pendingAmount: 200000,   // ₹2,000
        },
    });

    const campaign2 = await prisma.campaign.create({
        data: {
            ngoId: ngo2.id,
            title: 'Scholarship Fund for Orphan Students',
            description: `Support education for 50 orphan children from Baramulla district.`,
            category: Category.EDUCATION,
            goalAmount: 300000000, // ₹30,00,00,0 in paise
            deadline: new Date('2026-03-31'),
            imageUrl: '/images/campaigns/education-scholarship.jpg',
            upiId: 'chinaredu@jkb',
            bankAccount: '9876543210',
            ifsc: 'JAKA0000456',
            accountHolder: 'Chinar Education Trust',
            bankName: 'Jammu & Kashmir Bank',
            status: CampaignStatus.ACTIVE,
            verifiedAmount: 300000, // ₹3,000
            pendingAmount: 0,
        },
    });

    console.log('✓ Created 2 active campaigns');

    // Seed some donations
    await prisma.donation.createMany({
        data: [
            {
                campaignId: campaign1.id,
                donorName: 'Farooq Ahmad',
                amount: 500000, // ₹5,000
                utrLast4: '1234',
                paymentTime: new Date('2026-02-15T10:30:00'),
                status: 'VERIFIED',
                verifiedAt: new Date('2026-02-15T14:00:00'),
            },
            {
                campaignId: campaign1.id,
                donorName: 'Aisha Khan',
                amount: 1000000, // ₹10,000
                utrLast4: '5678',
                paymentTime: new Date('2026-02-16T15:45:00'),
                status: 'VERIFIED',
                verifiedAt: new Date('2026-02-16T18:00:00'),
            },
            {
                campaignId: campaign1.id,
                donorName: null, // Anonymous
                amount: 200000, // ₹2,000
                utrLast4: '9012',
                paymentTime: new Date('2026-02-17T09:15:00'),
                status: 'PENDING',
            },
        ],
    });

    console.log('✓ Created 3 sample donations');

    // Add campaign updates
    await prisma.campaignUpdate.createMany({
        data: [
            {
                campaignId: campaign1.id,
                ngoId: ngo1.id,
                content: 'We have received initial quotes from medical equipment suppliers. The procurement process has begun. Thank you for your support!',
            },
            {
                campaignId: campaign2.id,
                ngoId: ngo2.id,
                content: 'First batch of 20 students have been selected. Admission process is underway. More updates coming soon!',
            },
        ],
    });

    console.log('✓ Created 2 campaign updates');

    console.log('');
    console.log('🎉 Database seeding completed successfully!');
    console.log('');
    console.log('Summary:');
    console.log(`  - ${districts.length} districts (Kashmir Division)`);
    console.log('  - 1 Super Admin (madmin)');
    console.log('  - 2 verified NGOs with partner users');
    console.log('');
    console.log('  - 2 active campaigns');
    console.log('  - 3 donations (2 verified, 1 pending)');
    console.log('  - 2 campaign updates');
}

main()
    .catch((e) => {
        console.error('❌ Error during seeding:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
