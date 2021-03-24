
const proxy = require('http-proxy-middleware');
const apiMocker = require('connect-api-mocker');

module.exports = function (app) {

    /* app.use(apiMocker('/get-session-redis', 'mocks/get-session-redis'));*/
    // app.use(apiMocker('/api', 'mocks/api/'));
    app.use(proxy('/api/items', {
        target: 'http://localhost:8080',
        autoRewrite: true,
        secure: false,
        changeOrigin: true,
        logLevel: 'debug'
    }));
};