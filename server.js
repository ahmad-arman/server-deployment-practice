'use strict';


const express =require('express');
const app =express();

const errHandler = require('./error-handlers/404');
const notFoundHandler = require('./error-handlers/500');

app.get('/',(req,res)=>{
  res.send('welcome to my server');  
});

app.get('/error',(req,res)=>{
  throw new Error('Something went wrong :(');
});

app.use(errHandler);
app.use('*',notFoundHandler);

function start(port){
  app.listen(port , ()=>{
    console.log(`your server on port ${port} `);

  });
}

module.exports = {
  app: app,
  start: start,
};


