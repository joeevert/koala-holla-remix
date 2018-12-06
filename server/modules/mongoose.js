const mongoose = require('mongoose');

// MONGOOSE SCHEMA //
const Schema = mongoose.Schema;

// create a schema for a game
const koalasSchema = new Schema({
    // this is where we define our datatypes (props/columns/etc.)
    name: { type: String },
    gender: { type: String },
    age: { type: Number },
    ready_to_transfer: { type: Boolean },
    notes: { type: String },
    image_url: { type: String }
});

const Koalas = mongoose.model('Koalas', koalasSchema);

module.exports = Koalas;