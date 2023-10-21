const express = require('express');
require('dotenv').config();
const db = require('./src/mongoose/mongoose')
const api = require('./src/api/api')
const cors = require('cors');

const app = express();

const port = process.env.port
app.use(express.json());
app.use(cors());

app.use(api)


app.listen(port, ()=>{
    console.log('listening on port', port);
});