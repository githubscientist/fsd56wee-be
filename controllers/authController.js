const User = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../utils/config");

const authController = {
    register: async (req, res) => {
        try {
            // get the user input
            const { name, username, password } = req.body;

            // check if the user already exists
            const user = await User.findOne({ username });

            if (user) {
                return res.status(400).json({ message: 'User already exists' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            // create a new user
            const newUser = new User({ name, username, password: hashedPassword });

            // save the user
            await newUser.save();

            res.status(201).json({ message: 'User created successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    login: async (req, res) => {
        try {
            // get the user inputs - username and password
            const { username, password } = req.body;

            // check if the user exists in the database
            const user = await User.findOne({ username });

            if (!user) {
                return res.status(400).json({ message: 'User not found' });
            }

            // compare the password
            const validPassword = await bcrypt.compare(password, user.password);

            if (!validPassword) {
                return res.status(400).json({ message: 'Invalid password' });
            }

            // generate a token
            const token = jwt.sign({ id: user._id }, JWT_SECRET);

            // store the token in the cookie
            res.cookie('token', token, {
                httpOnly: true,
                sameSite: 'none',
                secure: true
            });

            res.json({ message: 'Login successful' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }, 

    logout: async (req, res) => {
        try {
            const userId = req.userId;

            // get the user details from the database
            const user = await User.findById(userId);

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.clearCookie('token').json({ message: 'Logout successful' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    me: async (req, res) => {
        // get the user id from the request object
        const userId = req.userId;

        // get the user details from the database
        const user = await User.findById(userId).select('-password -__v -created_at -updated_at -_id');

        res.json(user);
    }
}

module.exports = authController;