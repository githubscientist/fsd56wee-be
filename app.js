// import the express module
const express = require('express');
const userRouter = require('./routes/userRoutes');
const authRouter = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const bookRouter = require('./routes/bookRoutes');
const reviewRouter = require('./routes/reviewRoutes');

// create a new express app
const app = express();

// use the express json middleware for parsing json data
app.use(express.json());

// use the cookie parser middleware
app.use(cookieParser());

// use the routers
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/admin/books', bookRouter);
app.use('/api/v1/admin/reviews', reviewRouter);

// export the app
module.exports = app;
