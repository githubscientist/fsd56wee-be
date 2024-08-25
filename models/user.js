// import mongoose
const mongoose = require('mongoose');

// create  a new schema
const userSchema = new mongoose.Schema({
    username: String,
    name: String,
    password: String,
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})


// create a new model and export it
module.exports = mongoose.model('User', userSchema, 'users');