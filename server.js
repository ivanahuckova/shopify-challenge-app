const express = require('express');
const path = require('path');
const app = express();

const pathToBuildFolder = path.join(__dirname, 'build');
const pathToIndexHtml = path.join(pathToBuildFolder, 'index.html');

app.use(express.static(pathToBuildFolder));

app.get('/', (req, res) => {
  res.sendFile(pathToIndexHtml);
});

app.listen(process.env.PORT || 3000);
