const express = require('express');
import path from 'path';

const server = express();
const serve = express.static;

const clientFiles = path.resolve(__dirname, 'dist/client');

server.use('/', serve(clientFiles));

export default server;
