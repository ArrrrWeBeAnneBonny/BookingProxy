const express = require('express');
const cors = require('cors');

const proxy = express();

proxy.use(cors());

const allowedOrigins = [
  'http://localhost:2000/',
  'http://localhost:3002/',
  "https://fec-booking.s3.us-west-1.amazonaws.com/booking.js",
  "https://fec-booking.s3.us-west-1.amazonaws.com/styles.css",
  'http://ec2-54-151-15-127.us-west-1.compute.amazonaws.com',
  'http://ec2-13-56-114-222.us-west-1.compute.amazonaws.com',
  'http://67.160.218.95.32:3002',
  'http://67.160.218.95.32:80',
  'http://67.160.218.95.32',
  'http://localhost:2000/'
];

proxy.use(cors({ origin: allowedOrigins }));

const mode = process.env.NODE_ENV;

let PORT = 0;
let url = '';

if (mode === "development" || !process.env.NODE_ENV) {
  // proxy.use(express.static(__dirname + './public/dev'));
  PORT = 2000;
  url = 'http://localhost:2000';
} else if (mode === 'production') {
  // proxy.use(express.static(__dirname + './public/prod'));
  url = 'http://ec2-54-151-15-127.us-west-1.compute.amazonaws.com';
  PORT = 80;
}

proxy.use(express.static('dist'));
console.log('PORT: ', PORT, 'url: ', url);

proxy.listen(PORT, () => {
  console.log(`Starting Proxy Server at ${url}`);
});
