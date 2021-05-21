const express = require('express');
const { proxy } = require('http-proxy-middleware');
const path = require('path');

const PORT = process.env.PORT || 2000;
const HOST = "localhost";

const app = express();

app.use(express.static('public'));

app.use('/proxy', proxy({
  pathRewrite: {
     '^/proxy/': '/'
  },
  target: 'https://localhost:2000',
  secure: false
}));

app.get('*', (req, res) => {
 res.sendFile(path.resolve(__dirname, 'index.html'));
});

// Start my Proxy Server
app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy Server at ${HOST}:${PORT}`);
});

//add to my front-end:
// const URL = `/proxy/${PATH}`;
// return axios.get(URL);