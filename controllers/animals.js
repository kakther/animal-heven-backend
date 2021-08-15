const express = require('express');
const Entry = require('../models/animals');
const animals = express.Router();


animals.get('/', (req, res) => {
    Entry.find({}, (err, animalEntry) => {
        res.json(animalEntry)
    })
})

animals.post('/create', (req, res) => {
    Entry.create({}, (err, animalEntry) => {
        Entry.find({}, (err, animalEntry) => {
            res.json(animalEntry)
        })
    })
}) 






module.exports = animals