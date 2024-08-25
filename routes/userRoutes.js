// import express
const express = require('express');
const userController = require('../controllers/userController');

// create a router
const userRouter = express.Router();

// define the routes
userRouter.get('/', userController.test);

// export the router
module.exports = userRouter;