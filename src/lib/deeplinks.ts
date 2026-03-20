/**
 * Deep Link Utilities for UPI and Bank Apps
 * 
 * Research-backed implementation for India-specific payment apps
 * 
 * Key findings:
 * - iOS: generic `upi://` gets intercepted by WhatsApp. Always use app-specific schemes.
 * - Android: `intent://` URIs with `S.browser_fallback_url` properly fall back to Play Store.
 * - Bank apps on Android: Must use `intent://` with explicit package name so "Open App?" prompt
 *   appears OR Play Store opens if not installed.
 * - Paytm on iOS: `paytmmp://upi/pay?` is the correct scheme (not `paytm://`).
 * - GPay on iOS: `gpay://upi/pay?` (Google Pay rebranded from Tez, tez:// still works but gpay:// is preferred).
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
 * - iOS: gpay://upi/pay?<params>  (app-specific, bypasses WhatsApp)
 * - Android: intent:// with package, falls back to Play Store
 * - Desktop: generic upi:// (for QR code scanners)
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
            // intent:// format: Chrome on Android handles this natively
            // Opens GPay if installed, falls back to Play Store URL
            return `intent://upi/pay?${query}#Intent;scheme=upi;package=com.google.android.apps.nbu.paisa.user;S.browser_fallback_url=${playStoreFallback};end`;
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
            return `intent://upi/pay?${query}#Intent;scheme=upi;package=com.phonepe.app;S.browser_fallback_url=${playStoreFallback};end`;
        default:
            return `upi://pay?${query}`;
    }
}

/**
 * Returns the deep link for Paytm
 * Note: iOS uses `paytmmp://` not `paytm://`. The `paytm://` scheme is reserved for Paytm
 * merchant pages, while `paytmmp://` is the correct UPI pay scheme.
 */
export function getPaytmLink(params: UpiParams, platform = detectPlatform()): string {
    const query = buildUpiQuery(params);
    const playStoreFallback = encodeURIComponent(
        'https://play.google.com/store/apps/details?id=net.one97.paytm'
    );
    switch (platform) {
        case 'ios':
            // paytmmp:// is the correct Paytm UPI scheme on iOS
            return `paytmmp://upi/pay?${query}`;
        case 'android':
            return `intent://upi/pay?${query}#Intent;scheme=upi;package=net.one97.paytm;S.browser_fallback_url=${playStoreFallback};end`;
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
    /** iOS custom URL scheme (e.g. 'hdfcmobile://') */
    iosScheme: string;
    /** iOS App Store URL */
    iosStoreUrl: string;
    /** Android package name (e.g. 'com.snapwork.hdfc') */
    androidPackage: string;
    /** Android Play Store URL */
    androidStoreUrl: string;
}

export const BANK_APPS: BankApp[] = [
    {
        name: 'JK Bank',
        logo: '/banks/jkbank.svg',
        iosScheme: 'jkbankmpay://',
        iosStoreUrl: 'https://apps.apple.com/in/app/jk-bank-mobile/id1459613776',
        androidPackage: 'com.jkbank.mobilebanking',
        androidStoreUrl: 'https://play.google.com/store/apps/details?id=com.jkbank.mobilebanking',
    },
    {
        name: 'HDFC Bank',
        logo: '/banks/hdfc.svg',
        // HDFC iOS scheme: hdfcmobile:// 
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
        iosScheme: 'imobile://',
        iosStoreUrl: 'https://apps.apple.com/in/app/imobile-pay-by-icici-bank/id427761633',
        androidPackage: 'com.csam.icici.bank.imobile',
        androidStoreUrl: 'https://play.google.com/store/apps/details?id=com.csam.icici.bank.imobile',
    },
    {
        name: 'Kotak Bank',
        logo: '/banks/kotak.svg',
        iosScheme: 'kotak://',
        iosStoreUrl: 'https://apps.apple.com/in/app/kotak-mobile-banking-app/id880030949',
        androidPackage: 'com.msf.kbank.mobile',
        androidStoreUrl: 'https://play.google.com/store/apps/details?id=com.msf.kbank.mobile',
    },
];

/**
 * Handles bank app deep linking in a cross-platform, reliable way.
 * 
 * Android strategy:
 *   Use `intent://` with explicit package + browser_fallback_url pointing to Play Store.
 *   This makes Chrome show "Open in <App>" if installed, or redirect to Play Store if not.
 *   Unlike window.location.href hacks, this is the officially supported Android mechanism.
 * 
 * iOS strategy:
 *   Attempt to open the app-specific scheme in current tab (which triggers "Open App?" dialogue
 *   on iOS). Set a timer: if the page is still visible after the delay, it means the app is
 *   not installed — navigate to the App Store URL.
 */
export function openBankApp(bank: BankApp): void {
    const platform = detectPlatform();

    if (platform === 'android') {
        // Chrome on Android supports intent:// URIs directly.
        // The browser_fallback_url ensures Play Store opens if package is not installed.
        // This is the ONLY reliable way to trigger "Open App?" on Android from the web.
        const fallback = encodeURIComponent(bank.androidStoreUrl);
        const intentUri = `intent://#Intent;package=${bank.androidPackage};S.browser_fallback_url=${fallback};end`;
        window.location.href = intentUri;
    } else if (platform === 'ios') {
        // Try the app-specific scheme (triggers "Open in App?" system dialog on iOS if installed)
        const appScheme = bank.iosScheme;
        
        // We attempt to navigate to the scheme. iOS will either:
        // 1. Open the app (page stays in background)
        // 2. Show nothing if app not installed (page stays visible)
        window.location.href = appScheme;
        
        // After a short grace period, check if we're still "here".
        // If the page is still visible (no app opened), go to App Store.
        // We use Page Visibility API: if app opened, the page becomes hidden.
        const handleVisibilityChange = () => {
            clearTimeout(timer);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
        
        const timer = setTimeout(() => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            // If still visible, app is not installed, go to App Store
            if (!document.hidden) {
                window.location.href = bank.iosStoreUrl;
            }
        }, 2500);
        
        document.addEventListener('visibilitychange', handleVisibilityChange);
    } else {
        // Desktop: just link to the web portal or Play Store page
        window.open(bank.androidStoreUrl, '_blank');
    }
}
