const express = require('express');
const router = express.Router();
const Koalas = require('../modules/mongoose.js');

// Setup a GET route to get all the koalas from the database
router.get('/', (req, res) => {
    console.log('Get request for koalas');
    Koalas.find({}).sort( { name: 1 })
        .then( (results) => {
            console.log(results);
            res.send(results);
        }).catch( (error) => {
            console.log('error on find:', error);
            res.sendStatus(500);
        })
})


// Setup a POST route to add a new koala to the database
router.post('/', (req, res) => {
    const newKoala = req.body;
    console.log('Post request for new koala:', newKoala); 
    Koalas.create(newKoala)
        .then( (results) => {
            console.log(results);
            res.sendStatus(201);
        }).catch( (error) => {
            console.log('error on create:', error);
            res.sendStatus(500);
        })
})

// Setup DELETE to remove a koala
router.delete('/:id', (req, res) => {
    let reqId = req.params.id;
    console.log('Delete request for id:', reqId);
    Koalas.remove({ _id: reqId })
        .then( (results) => {
            console.log(results);
            res.sendStatus(201);
        }).catch( (error) => {
            console.log('error on delete:', error);
            res.sendStatus(500);
        })
})

// Setup PUT to update koala (all qualities)
router.put('/:id', (req, res) => {
    let reqId = req.params.id;
    updatedKoala = req.body;
    console.log('Put request (update koala) for id:', reqId);
    Koalas.update({ _id: reqId }, updatedKoala)
        .then( (results) => {
            console.log(results);
            res.sendStatus(201);
        }).catch( (error) => {
            console.log('error on put:', error);
            res.sendStatus(500);
        })
})

// Setup PUT to update koala's transfer status
router.put('/transfer/:id', (req, res) => {
    let reqId = req.params.id;
    console.log(`Put request (update koala's transfer status) for id:`, reqId);
    Koalas.update({ _id: reqId }, { $set: { ready_to_transfer: true } })
        .then( (results) => {
            console.log(results);
            res.sendStatus(201);
        }).catch( (error) => {
            console.log('error on put:', error);
            res.sendStatus(500);
        })
})

module.exports = router;