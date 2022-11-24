function homeController(){
    return{
        index(req, res){
            res.render('home')
        }
    }
}

module.exports = homeController

//This means if we are calling this module anywhere we will be returned with the thing that is returned to the file where the function is called.
//This file is called the controller file which shortens up the job at the file which is used to call. Like in this case it is web.js