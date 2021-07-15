

const express  = require('express');
const mongoose = require('mongoose');
//const morgan   = require('morgan');

const PORT = process.env.PORT || 4000;
const DB   = process.env.DB   || 'mongodb://localhost/todo';

const app = express();

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log(`DB connected @ ${DB}`))
  .catch(err => console.log(err));

//app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());

app.use('/', require('./api/task'));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
