const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let animalSchema = new Schema(
    {
        name: {
            type: String
        },
        description: {
            type: String
        },
        img: {
            type: String
        },

        gender: {
            type: String
        },

        age: {
            type: Number
        }
});




const animalmodel = mongoose.model('animals', animalSchema);
module.exports = animalmodel;