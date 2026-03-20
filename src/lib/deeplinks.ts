/**
 * Deep Link Utilities for UPI and Bank Apps
 * 
 * Corrected implementation for 2024/2025:
 * - Android: Generic `intent://pay?` matches the standard UPI intent filters (removing the redundant `upi/` prefix).
 * - iOS: Paytm uses `paytm://` for UPI.
 * - iOS Banks: Updated schemes and forced /in/ (India) store links.
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
 * - Android Corrected: intent://pay? (matches standard upi://pay intent filter)
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
            // intent://pay? instead of intent://upi/pay?
            return `intent://pay?${query}#Intent;scheme=upi;package=com.google.android.apps.nbu.paisa.user;action=android.intent.action.VIEW;S.browser_fallback_url=${playStoreFallback};end`;
        default:
            return `upi://pay?${query}`;
    }
}

/**
 * Returns the deep link for PhonePe
 */
export function getPhonePeLink(params: UpiParams, platform = detectPlatform()): string {
    const query = buildUpiQuery(params);
    const playStoreFallback = encodeURIComponent(
        'https://play.google.com/store/apps/details?id=com.phonepe.app'
    );
    switch (platform) {
        case 'ios':
            return `phonepe://upi/pay?${query}`;
        case 'android':
            return `intent://pay?${query}#Intent;scheme=upi;package=com.phonepe.app;action=android.intent.action.VIEW;S.browser_fallback_url=${playStoreFallback};end`;
        default:
            return `upi://pay?${query}`;
    }
}

/**
 * Returns the deep link for Paytm
 * Note: paytm:// is standard for UPI.
 */
export function getPaytmLink(params: UpiParams, platform = detectPlatform()): string {
    const query = buildUpiQuery(params);
    const playStoreFallback = encodeURIComponent(
        'https://play.google.com/store/apps/details?id=net.one97.paytm'
    );
    switch (platform) {
        case 'ios':
            return `paytm://upi/pay?${query}`;
        case 'android':
            return `intent://pay?${query}#Intent;scheme=upi;package=net.one97.paytm;action=android.intent.action.VIEW;S.browser_fallback_url=${playStoreFallback};end`;
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
        iosScheme: 'jkbankmpay://',
        iosStoreUrl: 'https://apps.apple.com/in/app/jk-bank-mpay-delight/id1459613776',
        androidPackage: 'com.jkbank.mobilebanking',
        androidStoreUrl: 'https://play.google.com/store/apps/details?id=com.jkbank.mobilebanking',
    },
    {
        name: 'HDFC Bank',
        logo: '/banks/hdfc.svg',
        iosScheme: 'hdfcmobile://',
        iosStoreUrl: 'https://apps.apple.com/in/app/hdfc-bank-mobilebankingapp/id438629283',
        androidPackage: 'com.snapwork.hdfc',
        androidStoreUrl: 'https://play.google.com/store/apps/details?id=com.snapwork.hdfc',
    },
    {
        name: 'SBI YONO',
        logo: '/banks/sbi.svg',
        iosScheme: 'yono://',
        iosStoreUrl: 'https://apps.apple.com/in/app/yono-by-sbi/id1317638810',
        androidPackage: 'com.sbi.lotusintouch',
        androidStoreUrl: 'https://play.google.com/store/apps/details?id=com.sbi.lotusintouch',
    },
    {
        name: 'Axis Bank',
        logo: '/banks/axisbank.svg',
        iosScheme: 'axismobile://',
        iosStoreUrl: 'https://apps.apple.com/in/app/axis-mobile-banking-app/id1455024334',
        androidPackage: 'com.axis.mobile',
        androidStoreUrl: 'https://play.google.com/store/apps/details?id=com.axis.mobile',
    },
    {
        name: 'ICICI Bank',
        logo: '/banks/icici.svg',
        iosScheme: 'imobilepay://',
        iosStoreUrl: 'https://apps.apple.com/in/app/imobile-pay-by-icici-bank/id427761633',
        androidPackage: 'com.csam.icici.bank.imobile',
        androidStoreUrl: 'https://play.google.com/store/apps/details?id=com.csam.icici.bank.imobile',
    },
    {
        name: 'Kotak Bank',
        logo: '/banks/kotak.svg',
        iosScheme: 'kotakbank://',
        iosStoreUrl: 'https://apps.apple.com/in/app/kotak-mobile-banking-app/id880030949',
        androidPackage: 'com.msf.kbank.mobile',
        androidStoreUrl: 'https://play.google.com/store/apps/details?id=com.msf.kbank.mobile',
    },
];

export function openBankApp(bank: BankApp): void {
    const platform = detectPlatform();

    if (platform === 'android') {
        const fallback = encodeURIComponent(bank.androidStoreUrl);
        const intentUri = `intent://#Intent;action=android.intent.action.VIEW;package=${bank.androidPackage};S.browser_fallback_url=${fallback};end`;
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
