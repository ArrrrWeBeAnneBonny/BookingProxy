
const express = require('express');
const morgan = require("morgan");
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Configuration
const PORT = 3006;
const HOST = "localhost";
const API_SERVICE_URL = "https://localhost:3002/booking";

app.use(morgan('dev'));

// Mock '/info' GET endpoint
app.get('/info', (req, res, next) => {
  res.send('This is a proxy service which proxies to the Booking Service API.');
});

// Authorization: to be included when I build out Auth
// app.use('', (req, res, next) => {
//   if (req.headers.authorization) {
//       next();
//   } else {
//       res.sendStatus(403);
//   }
// });

// Proxy endpoints
app.use('/localhost:3002', createProxyMiddleware({
  target: API_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: {
      ['^/localhost:3002']: '',
  },
}));

// Start the Proxy
app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});

//test req:
// curl localhost:3006/info
//curl localhost:3006/localhost:3002/booking/1