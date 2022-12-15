const express = require('express') 
const app = express() 
const ejs = require('ejs')
const expressLayout = require('express-ejs-layouts')


const path = require('path')

const PORT = process.env.PORT || 3000

const { colors } = require('laravel-mix/src/Log')

const mongoose = require('mongoose');

const url = 'mongodb://localhost/pizza';
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Database connected...');
})

.on('error', (error) => {
    console.log('Connection error:', error);
});

// Assets
app.use(express.static('public'))

app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'))

app.set('view engine', 'ejs')

require('./routes/web')(app)

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
})
