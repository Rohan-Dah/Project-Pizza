//this file has all the local routes of the pages that we will redirect

const homeController = require('../App/http/controllers/homeController')
const authController = require('../App/http/controllers/authController')
const cartController = require('../App/http/controllers/customers/cartController')

function initRoutes(app){

    app.get('/', homeController().index)
    //Second parameter is a factory function which means it completely redirects the req, res block and returns what the function actually returns.
    
    // app.get('/', (req, res) => {
    //     res.render('home')
    // })

    app.get('/login', authController().login)
    //Here authController is the factory function which is at /App/controllers/home

    app.get('/register', authController().register)
    
    app.get('/cart', cartController().index)

    // app.get('/cart', (req, res) => {
    //     res.render('customers/cart')
    // }) 
    
    
}

module.exports = initRoutes

//Here we will be recieving parameter called which is under the domain of require express module that is in the server file. 
//The point to note is every file in node is a module which can be imported to any other file by simply using require. 