const express = require('express');
const morgan = require("morgan");
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Configuration
const PORT = 2000;
const HOST = "localhost";
const BOOKING_SERVICE_URL = "https://localhost:3002";

app.use(morgan('dev'));

// Authorization: to be included when I build out Auth
// app.use('', (req, res, next) => {
//   if (req.headers.authorization) {
//       next();
//   } else {
//       res.sendStatus(403);
//   }
// });

// Proxy endpoints
app.use('/booking', createProxyMiddleware({
  target: BOOKING_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: {
      ['^/localhost:3002']: '',
  },
}));

// Start the Proxy
app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});

//test my proxy:
//curl http://localhost:3002/booking?campId=0


