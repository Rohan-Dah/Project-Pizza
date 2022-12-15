//this file has all the local routes of the pages that we will redirect

const homeController = require('../App/http/controllers/homeController')
const authController = require('../App/http/controllers/authController')
const cartController = require('../App/http/controllers/customers/cartController')

function initRoutes(app){

    app.get('/', homeController().index)

    app.get('/login', authController().login)
    //Here authController is the factory function which is at /App/controllers/home

    app.get('/register', authController().register)
    
    app.get('/cart', cartController().index)  
}

module.exports = initRoutes

