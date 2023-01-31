const express = require('express');
const path = require('path')
const data = require('./db/db.json')

const app = express();

const PORT = process.env.PORT || 3001;


app.use(express.static('public'))


app.get('/api/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);


app.post('/api/notes', (req, res) => res.send())








// app.delete('/api/notes', (req, res) => res.send('Coming Soon!')); 




app.listen(PORT, () =>
  console.log(`http://localhost:${PORT}`)
);



