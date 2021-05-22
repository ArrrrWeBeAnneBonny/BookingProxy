const express = require('express');

const PORT = process.env.PORT || 2000;
const HOST = "localhost";

const app = express();

app.use(express.static('public'));

// Start my Proxy Server
app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy Server at ${HOST}:${PORT}`);
});

