// create a controller object with all the methods that will be used in the routes
const userController = {
    // method to test the route
    test: (req, res) => {
        res.send('Hello World');
    }
}

// export the controller
module.exports = userController;