const REMOTE_URL = 'https://test-app.ngrmdgtl.com';

const baseConfig = {
    target: REMOTE_URL,
    secure: false,
    changeOrigin: true,
    autoRewrite: true,
    logLevel: 'debug',
}
const PROXY_CONFIG = [
    {
        context: [
            '/api/',
        ],
        ...baseConfig,
        cookieDomainRewrite: {
            localhost: REMOTE_URL.replace('http://', '')
        }
    },
]

module.exports = PROXY_CONFIG;
