const User = require("../models/user");
const bcrypt = require('bcrypt');

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
    }
}

module.exports = authController;