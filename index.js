'use strict';

const { start } = require('./server.js');
const server =require('./server.js');
require('dotenv').config();
const port =process.env.PORT || 2500 ;


server.start(port);
