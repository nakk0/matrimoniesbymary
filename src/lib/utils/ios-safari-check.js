export function isIOS() {
    const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : '';
    return /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
}

export function isSafari() {
    const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : '';
    return /^((?!chrome|android).)*safari/i.test(userAgent);
}