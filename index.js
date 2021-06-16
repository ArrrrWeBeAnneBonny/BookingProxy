const express = require('express');
const cors = require('cors');

const proxy = express();

proxy.use(cors());

const = allowedOrigins: [
  'http://localhost:2000/',
  'http://localhost:3002/',
  "https://fec-booking.s3.us-west-1.amazonaws.com/1623867148511.booking.js",
  'http://ec2-54-151-15-127.us-west-1.compute.amazonaws.com/',
  'http://67.160.218.95.32:3002/',
  'http://67.160.218.95.32:80/',
  'http://67.160.218.95.32/'
];

proxy.use(cors({ origin: allowedOrigins }));

const PORT = 80;
const url = 'http://ec2-54-151-15-127.us-west-1.compute.amazonaws.com/';

proxy.use(express.static('dist'));

proxy.listen(PORT, () => {
  console.log(`Starting Proxy Server at ${url}`);
});
