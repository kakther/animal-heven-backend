const express = require('express');
const animals = express.Router();
const Entry = require('../models/animals');

// HOME
animals.get('/', (req, res) => {
    Entry.find({}, (err, animalEntry) => {
        console.log(animalEntry)
        res.json(animalEntry)
    })
})


//CREATE
animals.post('/', (req, res) => {
    Entry.create(req.body, (err, createAnimal) => {
        Entry.find({}, (err, animalEntry) => {
            res.json(animalEntry)
        })
    })
}) 


//UPDATE
animals.put('/:id', (req, res) => {
    Entry.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        {new: true}, 
        (err, updateEntry) => {
            if(err){
                res.send(err)
            }else{
                Entry.find({}, (err, animalEntry) => {
                    res.json(animalEntry)
                })
            }
    })
})

//DELETE
animals.delete('/:id', (req, res) => {
    Entry.findByIdAndRemove(req.params.id, (err, deletedEntry) => {
        Entry.find({}, (err, foundEntry) => {
            res.json(animalEntry)
        })
    })
}) 


module.exports = animals