const express = require('express');
const router = express.Router();
const Koalas = require('../modules/mongoose.js');

// Setup a GET route to get all the koalas from the database
router.get('/', (req, res) => {
    Koalas.find({}).sort( { name: 1 })
        .then( (results) => {
            console.log(results);
            res.send(results);
        }).catch( (error) => {
            console.log('error on find:', error);
            res.sendStatus(500);
        })
})


// Setup a POST route to add a new employee to the database
router.post('/', (req, res) => {
    // const newKoala = req.body;
    // Koalas.create(newEmployee)
    //     .then( (results) => {
    //         console.log(results);
    //         res.sendStatus(201);
    //     }).catch( (error) => {
    //         console.log('error on create:', error);
    //         res.sendStatus(500);
    //     })
})

// Setup DELETE to remove an employee
router.delete('/:id', (req, res) => {
    let reqId = req.params.id;
    console.log('Delete request for id', reqId);
    // Employees.remove({ _id: reqId })
    //     .then( (results) => {
    //         console.log(results);
    //         res.sendStatus(201);
    //     }).catch( (error) => {
    //         console.log('error on delete:', error);
    //         res.sendStatus(500);
    //     })
})

// Setup PUT to update an employee's salary to $57,000
router.put('/:id', (req, res) => {
    let reqId = req.params.id;
    console.log('Put request for id', reqId);
    // Employees.update({ _id: reqId }, { $set: { annualSalary: 57000} })
    //     .then( (results) => {
    //         console.log(results);
    //         res.sendStatus(201);
    //     }).catch( (error) => {
    //         console.log('error on put:', error);
    //         res.sendStatus(500);
    //     })
})

module.exports = router;