const Review = require('../models/Review');

const reviewController = {
    getAllReviews: async (req, res) => {
        try {
            // get all reviews from the database
            const reviews = await Review.find();

            // send the reviews as a response
            res.status(200).json(reviews);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    createReview: async (req, res) => {
        try {
            // get the user id from the request
            const userId = req.userId;

            // get the book id from the URL parameter
            const bookId = req.params.id;

            // get the content from the request body
            const { content } = req.body;

            // create a new review object
            const review = new Review({
                userId,
                bookId,
                content,
            });

            // save the review to the database
            await review.save();

            // send the review as a response
            res.status(201).json({ message: 'Review created successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getReviewById: (req, res) => {
        
    },
    updateReview: (req, res) => {

    },
    deleteReview: (req, res) => {

    },
    getReviewsByBook: (req, res) => {

    },
    getReviewsByUser: (req, res) => {

    }
}

module.exports = reviewController;