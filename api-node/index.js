const express = require('express');
const app = express();
const profiles = require('./routes/profiles');
const auth = require('./routes/auth');
const users = require('./routes/users');
const upload = require('./routes/upload');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose
  .connect('mongodb://localhost/linkdin', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('Connected to mongodb://localhost/linkdin'))
  .catch((err) => console.log('Could not connect to MongoDB..', err));

const corsOptions = {
  origin: true,
  credentials: true,
};
app.options('*', cors(corsOptions));
app.use(express.json());
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'content-type');
  res.header('Access-Control-Allow-Headers', 'x-auth-token');
  next();
});
app.use('/api/profile', profiles);
app.use('/api/auth', auth);
app.use('/api/users', users);
app.use('/api/upload', upload);

app.listen('3900', () => console.log('on port 3900'));
