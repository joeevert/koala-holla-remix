const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const koalaRouter = require('./routers/koalas.router.js');
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/koala', koalaRouter);

/** ---------- MONGOOSE CONNECTION ---------- **/
const databaseURL = 'mongodb://localhost:27017/koala_holla';
mongoose.connect(databaseURL, { useNewUrlParser: true });

mongoose.connection.once('connected', () => {
    console.log('mongoose connected to:', databaseURL);  
})

mongoose.connection.on('error', (error) => {
    console.log('mongoose connection error:', error);
})

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});

module.exports = app;