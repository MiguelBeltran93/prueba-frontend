const { createProxyMiddleware } = require('http-proxy-middleware');
const connect = require('connect');
const apiMocker = require('connect-api-mocker');
const app = connect();

module.exports = function(app) {
    app.use('/api', apiMocker('mocks/api','/api'));
};