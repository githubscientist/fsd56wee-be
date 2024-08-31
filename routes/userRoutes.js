// import express
const express = require('express');
const userController = require('../controllers/userController');
const auth = require('../utils/auth');

// create a router
const userRouter = express.Router();

// define the routes
// protected routes, only authenticated users can access
userRouter.get('/', auth.verifyToken, userController.getUser);
userRouter.put('/', auth.verifyToken, userController.putUser);
userRouter.delete('/', auth.verifyToken, userController.deleteUser);

// export the router
module.exports = userRouter;