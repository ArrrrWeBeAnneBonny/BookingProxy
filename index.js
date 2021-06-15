const express = require('express');
const cors = require('cors');

const proxy = express();
proxy.use(cors());

const mode = process.env.NODE_ENV;
console.log(`hi you are in ${mode}`);

let PORT = 0;
let url = '';

if (!process.env.NODE_ENV || mode === 'development') {
  url += "http://localhost:2000";
  PORT = 2000;
} else if (mode === 'production') {
  proxy.use(express.static(__dirname + '/public/prod'));
  url += "http://ec2-54-151-15-127.us-west-1.compute.amazonaws.com";
  PORT = 80;
}

proxy.use(express.static(__dirname + '/public'));
console.log('url: ', url);
console.log('PORT: ', PORT);

proxy.listen(PORT, () => {
  console.log(`Starting Proxy Server at ${url}`);
});
