const devConfig = require('./webpack.dev.config')
const express = require('express');
const server = express();
const path = require('path')
server.get('/index.html', (req, res) => {
    res.sendFile(path.resolve(__dirname,"../dev-dist/dev-index.html"));
})
server.get('/dev-bundle.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dev-dist/dev-bundle.js"));
})
server.listen(devConfig.devServer.port);
