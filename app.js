// import the express module
const express = require('express');
const userRouter = require('./routes/userRoutes');

// create a new express app
const app = express();

// use the routers
app.use('/api/v1', userRouter);

// export the app
module.exports = app;
