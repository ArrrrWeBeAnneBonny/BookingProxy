const express = require('express');

const app = express();

const PORT = 2000;
const HOST = "localhost";

app.use(express.static('public'));

// Start my Proxy Server
app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});


