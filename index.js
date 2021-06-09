const express = require('express');
const cors = require('cors');

const proxy = express();
proxy.use(cors());

const mode = process.env.NODE_ENV;
console.log(`hi you are in ${mode}`);

let PORT = 0;
let url = '';

if (mode === 'development' || mode === undefined) {
  proxy.use(express.static(__dirname + '/public/dev'));
  PORT = 2000;
  url += "http://localhost:2000";
} else if (mode === 'production') {
  proxy.use(express.static(__dirname + '/public/prod'));
  PORT = 80;
  url += "http://ec2-54-241-114-176.us-west-1.compute.amazonaws.com";
}

proxy.listen(PORT, () => {
  console.log(`Starting Proxy Server at port ${url}`);
});
