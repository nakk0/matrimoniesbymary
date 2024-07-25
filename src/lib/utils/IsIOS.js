export function isIOS() {
    const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : '';
    return /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
}
