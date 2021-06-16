const express = require('express');
const cors = require('cors');
const config = require('./config.js');

const proxy = express();
proxy.use(cors());
proxy.use(cors({ origin: config.allowedOrigins }));

const mode = process.env.NODE_ENV;
console.log(`hi you are in ${mode}`);

let PORT = 0;
let url = '';

if (mode === 'production') {
  url += config.production.proxy;
  PORT = config.production.PORT;
} else if (!process.env.NODE_ENV || mode === 'development') {
  url += config.dev.proxy;
  PORT = config.dev.PORT;
}

proxy.use(express.static('dist'));

proxy.listen(PORT, () => {
  console.log(`Starting Proxy Server at ${url}`);
});
