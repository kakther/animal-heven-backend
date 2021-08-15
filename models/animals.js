// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// let animalSchema = new Schema(
//     {
//         name: {
//             type: String
//         },
//         description: {
//             type: String
//         },
//         img: {
//             type: String
//         },

//         gender: {
//             type: String
//         },

//         age: {
//             type: Number
//         }
// });




// const animalmodel = mongoose.model('animals', animalSchema);
// module.exports = animalmodel;

const mongoose = require('mongoose')

const animalSchema = new mongoose.Schema(
    {
        name: String,
        description: String,
        img: String,
        gender: String,
        age: Number
    },
    {timestamps: true}
)

const Animal = mongoose.model('Animal', animalSchema)
module.exports = Animal;