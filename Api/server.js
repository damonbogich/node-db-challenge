const express = require('express');
const helmet = require('helmet');

const ProjectRouter = require('../projects/project-router.js');

const db = require('../Data/db-config.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', ProjectRouter);



module.exports = server;