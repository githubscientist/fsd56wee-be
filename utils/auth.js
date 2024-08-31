const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./config');

const auth = {
    verifyToken: async (req, res, next) => {
        try {
            // get the token from the cookie
            const token = req.cookies.token;

            if (!token) {
                return res.status(401).json({ message: 'Unauthorized' });
            }

            try {
                // verify the token
                const decodedToken = jwt.verify(token, JWT_SECRET);

                // attach the user id to the request object
                req.userId = decodedToken.id;

                // call the next middleware
                next();
            } catch (error) {
                return res.status(401).json({ message: 'Invalid token' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = auth;