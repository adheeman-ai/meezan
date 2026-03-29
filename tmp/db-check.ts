import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function check() {
  const ngos = await prisma.ngo.findMany();
  const campaigns = await prisma.campaign.findMany();
  
  console.log('NGOs:', JSON.stringify(ngos, null, 2));
  console.log('Campaigns:', JSON.stringify(campaigns, null, 2));
  
  await prisma.$disconnect();
}

check();
