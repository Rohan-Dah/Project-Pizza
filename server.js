const express = require('express') //Creating a variable express and adding express module into app.
const app = express() //Calling express
const ejs = require('ejs')
const expressLayout = require('express-ejs-layouts')
//Importing ejs and express-js-layouts. Both are just js templates that we will be using...

const path = require('path')

const PORT = process.env.PORT || 3300
// PORT variable will be either assigned with process.env which is currently available environment port number or the port number will be 3000. In short we are setting sn environment variable.
// PORT mila toh PORT variable mein port rahega


app.get('/', (req, res) => {
    res.render('home')
})

app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'))
//Here we will set the file path of views folder which will contain how will the site look like
app.set('view engine', 'ejs')
/*
if(process.env.PORT)
{
    PORT = process.env.PORT
} //This is where we are assigning the value of the port number to the environment variable.

else{
    PORT = 3000
}
*/

app.listen(PORT, ()=>{
    console.log(`Listening on Port ${PORT}`)
})
//app.listen is used to listen and bind the connections on host and port. This is similar to Node's http.server.listen
//After fetching the port number it will display the below text.
