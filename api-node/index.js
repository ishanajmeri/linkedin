const express = require('express');
const app = express();
const profiles = require('./routes/profiles');
const auth = require('./routes/auth');
const users = require('./routes/users');
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/linkdin', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('Connected to mongodb://localhost/linkdin'))
  .catch((err) => console.log('Could not connect to MongoDB..', err));

app.use(express.json());
app.use('/api/profile', profiles);
app.use('/api/auth', auth);
app.use('/api/users', users);

app.listen(3900, () => console.log('on port 3900'));
