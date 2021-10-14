const express = require('express');
const mongoose = require('mongoose');
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');
const app = express();

//connect db

mongoose
  .connect('mongodb://localhost/smartedu-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB Connected!');
  });

//temp engine

app.set('view engine', 'ejs');

//MIDDLEWARE

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Route
app.use('/', pageRoute);
app.use('/courses', courseRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
