const express = require('express');
const path = require('path')
const apiRoutes = require('./routes/apiRoutes.js')
const htmlRoutes = require('./routes/htmlRoutes.js')

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', htmlRoutes)
app.use('/api', apiRoutes );
app.use(express.static('public'))



app.listen(PORT, () =>
  console.log(`http://localhost:${PORT}`)
);



