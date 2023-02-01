const express = require('express');
const path = require('path')


const app = express();

app.get('/notes', (req, res) =>{
  console.log('blue')
  res.sendFile(path.join(__dirname, '../public/notes.html'))
});

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);




module.exports = app