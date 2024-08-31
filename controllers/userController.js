const User = require('../models/user');

// create a controller object with all the methods that will be used in the routes
const userController = {
    getUser: async (req, res) => {
        try {
            // get the user id from the request object
            const userId = req.userId;

            // get the user from the database
            const user = await User.findById(userId).select('-password -__v -created_at -updated_at -_id');

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            // send the user object as response
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    putUser: async (req, res) => {
        try {
            const { name } = req.body;

            const userId = req.userId;

            const user = await User.findById(userId);

            user.name = name;

            await user.save();

            res.status(200).json({ message: 'User updated successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const userId = req.userId;

            await User.findByIdAndDelete(userId);

            res.clearCookie('token').json({ message: 'User deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

// export the controller
module.exports = userController;