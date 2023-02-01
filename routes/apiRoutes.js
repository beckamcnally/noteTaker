const express = require('express');
const store = require('../db/store');
const app = express()


app.get('/notes', (req, res) => {
  store
    .getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

app.post('/notes', (req, res) => {
  store
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

// app.delete('/notes', (req, res) => {
//   console.log(req)
//   store 
//   .deleteNote(req.noteId)
//   .then((noteId) => {
//     return res.json(noteId);
//   })
//   .catch((err) => res.status(500).json(err));
// })



module.exports = app;