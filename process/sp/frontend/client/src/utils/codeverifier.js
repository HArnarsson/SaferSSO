// utils.js
export const generateCodeVerifier = () => {
    const randomString = Math.random().toString(36).substring(2, 12);
    return randomString;
};

export const generateCodeChallenge = (codeVerifier) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
    return window.crypto.subtle.digest('SHA-256', data).then((hash) => {
    const base64Url = btoa(String.fromCharCode(...new Uint8Array(hash)))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
    return base64Url;
    });
};
  