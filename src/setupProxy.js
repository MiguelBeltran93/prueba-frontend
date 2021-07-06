const proxy = require('http-proxy-middleware');
const apiMocker = require('connect-api-mocker');

module.exports = function (app) {
  // remove comments for use mocks
  // app.use(apiMocker('/api', 'mocks/api/'));
  // please run project api(https://github.com/MiguelBeltran93/products-api/tree/develop) in local environment in port 3001
  app.use(
    proxy('/api/items', {
      target: 'http://localhost:3001',
      autoRewrite: true,
      secure: false,
      changeOrigin: true,
      logLevel: 'debug',
    })
  );
};
