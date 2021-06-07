const express = require('express');

const proxy = express();
const mode = process.env.NODE_ENV;
console.log(`hi you are in ${mode}`);

let PORT = 0;

if (mode === 'development') {
  proxy.use(express.static(__dirname + '/public/dev'));
  PORT = 2000;
} else if (mode === 'production') {
  proxy.use(express.static(__dirname + '/public/prod'));
  PORT = 80;
}

const dev_proxy = "http://localhost:2000";
const prod_proxy = "http://ec2-3-15-24-53.us-east-2.compute.amazonaws.com";

proxy.listen(PORT, () => {
  console.log(`Starting Proxy Server at port ${PORT}`);
});

