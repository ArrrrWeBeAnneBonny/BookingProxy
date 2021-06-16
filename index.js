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

if (!process.env.NODE_ENV || mode === 'production') {
  proxy.use(express.static(__dirname + '/public/prod'));
  url += "http://ec2-54-151-15-127.us-west-1.compute.amazonaws.com";
  PORT = 80;
} else if (mode === 'development') {
  url += "http://localhost:2000/";
  PORT = 2000;
}

proxy.use(express.static('dist'));

proxy.listen(PORT, () => {
  console.log(`Starting Proxy Server at ${url}`);
});
