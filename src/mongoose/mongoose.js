const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.uri;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log('conectado a la base de datos')

  module.export = mongoose