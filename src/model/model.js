const mongoose = require('mongoose');


const librosSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    author: {type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    imageURL: {
        type: String
    },
    precio:{
        type: Number
    }

})

const libro= mongoose.model('libro', librosSchema )
module.exports = libro;