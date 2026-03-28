/**
 * Deep Link Utilities for UPI and Bank Apps
 * 
 * Round 3 Refinements (2025):
 * - Android: Using app-specific schemes inside intents (scheme=phonepe, scheme=paytmmp) 
 *   to ensure the browser targets the correct handler precisely.
 * - iOS: Simplified paths (paytmmp://pay? instead of upi/pay) and removed region locking.
 * - JK Bank: Updated as per user provided mPay Delight+ IDs.
 */

export type Platform = 'ios' | 'android' | 'desktop';

export function detectPlatform(): Platform {
    if (typeof navigator === 'undefined') return 'desktop';
    const ua = navigator.userAgent;
    if (/iPad|iPhone|iPod/.test(ua)) return 'ios';
    if (/Android/.test(ua)) return 'android';
    return 'desktop';
}

// ─────────────────────────────────────────────────────────────
// UPI Deep Links
// ─────────────────────────────────────────────────────────────

export interface UpiParams {
    upiId: string;
    payeeName: string;
    amount: number;
    note?: string;
}

function buildUpiQuery(params: UpiParams): string {
    const p = new URLSearchParams({
        pa: params.upiId,
        pn: params.payeeName,
        am: String(params.amount),
        cu: 'INR',
        ...(params.note ? { tn: params.note } : {}),
    });
    return p.toString();
}

/**
 * Returns the deep link for Google Pay (GPay)
 * Android: GPay is robust with scheme=upi
 */
export function getGPayLink(params: UpiParams, platform = detectPlatform()): string {
    const query = buildUpiQuery(params);
    const playStoreFallback = encodeURIComponent(
        'https://play.google.com/store/apps/details?id=com.google.android.apps.nbu.paisa.user'
    );
    switch (platform) {
        case 'ios':
            return `gpay://upi/pay?${query}`;
        case 'android':
            return `intent://pay?${query}#Intent;scheme=upi;package=com.google.android.apps.nbu.paisa.user;action=android.intent.action.VIEW;S.browser_fallback_url=${playStoreFallback};end`;
        default:
            return `upi://pay?${query}`;
    }
}

/**
 * Returns the deep link for PhonePe
 * Android: Using scheme=phonepe to ensure it hits the app's native handler.
 */
export function getPhonePeLink(params: UpiParams, platform = detectPlatform()): string {
    const query = buildUpiQuery(params);
    const playStoreFallback = encodeURIComponent(
        'https://play.google.com/store/apps/details?id=com.phonepe.app'
    );
    switch (platform) {
        case 'ios':
            // Removed redundant upi/
            return `phonepe://pay?${query}`;
        case 'android':
            // Using phonepe:// as scheme inside intent
            return `intent://pay?${query}#Intent;scheme=phonepe;package=com.phonepe.app;action=android.intent.action.VIEW;S.browser_fallback_url=${playStoreFallback};end`;
        default:
            return `upi://pay?${query}`;
    }
}

/**
 * Returns the deep link for Paytm
 * Android: Using scheme=paytmmp for better resolution.
 */
export function getPaytmLink(params: UpiParams, platform = detectPlatform()): string {
    const query = buildUpiQuery(params);
    const playStoreFallback = encodeURIComponent(
        'https://play.google.com/store/apps/details?id=net.one97.paytm'
    );
    switch (platform) {
        case 'ios':
            // Using base paytm scheme without mp or upi segments
            return `paytm://pay?${query}`;
        case 'android':
            // Using paytmmp:// as scheme inside intent
            return `intent://pay?${query}#Intent;scheme=paytmmp;package=net.one97.paytm;action=android.intent.action.VIEW;S.browser_fallback_url=${playStoreFallback};end`;
        default:
            return `upi://pay?${query}`;
    }
}

// ─────────────────────────────────────────────────────────────
// Bank App Deep Links
// ─────────────────────────────────────────────────────────────

export interface BankApp {
    name: string;
    logo: string;
    iosScheme: string;
    iosStoreUrl: string;
    androidPackage: string;
    androidStoreUrl: string;
}

export const BANK_APPS: BankApp[] = [
    {
        name: 'JK Bank',
        logo: '/banks/jkbank.svg',
        iosScheme: 'jkbmpay://', 
        iosStoreUrl: 'https://apps.apple.com/app/jkb-mpay-delight/id6459356147',
        androidPackage: 'com.lcode.jkbmpay',
        androidStoreUrl: 'https://play.google.com/store/apps/details?id=com.lcode.jkbmpay&hl=en_IN',
    },
    {
        name: 'HDFC Bank',
        logo: '/banks/hdfc.svg',
        iosScheme: 'hdfcmobile://',
        iosStoreUrl: 'https://apps.apple.com/app/hdfc-bank-mobilebankingapp/id438629283',
        androidPackage: 'com.snapwork.hdfc',
        androidStoreUrl: 'https://play.google.com/store/apps/details?id=com.snapwork.hdfc',
    },
    {
        name: 'SBI YONO',
        logo: '/banks/sbi.svg',
        iosScheme: 'yono://',
        iosStoreUrl: 'https://apps.apple.com/app/yono-by-sbi/id1317638810',
        androidPackage: 'com.sbi.lotusintouch',
        androidStoreUrl: 'https://play.google.com/store/apps/details?id=com.sbi.lotusintouch',
    },
    {
        name: 'Axis Bank',
        logo: '/banks/axisbank.svg',
        iosScheme: 'axismobile://',
        iosStoreUrl: 'https://apps.apple.com/app/axis-mobile-banking-app/id1455024334',
        androidPackage: 'com.axis.mobile',
        androidStoreUrl: 'https://play.google.com/store/apps/details?id=com.axis.mobile',
    },
    {
        name: 'ICICI Bank',
        logo: '/banks/icici.svg',
        iosScheme: 'imobilepay://',
        iosStoreUrl: 'https://apps.apple.com/app/imobile-pay-by-icici-bank/id427761633',
        androidPackage: 'com.csam.icici.bank.imobile',
        androidStoreUrl: 'https://play.google.com/store/apps/details?id=com.csam.icici.bank.imobile',
    },
    {
        name: 'Kotak Bank',
        logo: '/banks/kotak.svg',
        iosScheme: 'kotakbank://',
        iosStoreUrl: 'https://apps.apple.com/app/kotak-mobile-banking-app/id880030949',
        androidPackage: 'com.msf.kbank.mobile',
        androidStoreUrl: 'https://play.google.com/store/apps/details?id=com.msf.kbank.mobile',
    },
];

export function openBankApp(bank: BankApp): void {
    const platform = detectPlatform();

    if (platform === 'android') {
        const fallback = encodeURIComponent(bank.androidStoreUrl);
        // Removing action=VIEW. Just the package name instructs Chrome to launch the app's main intent.
        const intentUri = `intent://#Intent;package=${bank.androidPackage};S.browser_fallback_url=${fallback};end`;
        window.location.href = intentUri;
    } else if (platform === 'ios') {
        window.location.href = bank.iosScheme;
        
        const handleVisibilityChange = () => {
            clearTimeout(timer);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
        
        const timer = setTimeout(() => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            if (!document.hidden) {
                window.location.href = bank.iosStoreUrl;
            }
        }, 3000); 
        
        document.addEventListener('visibilitychange', handleVisibilityChange);
    } else {
        window.open(bank.androidStoreUrl, '_blank');
    }
}
