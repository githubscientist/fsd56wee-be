# Book Review Platform Application

## Description

This is a book review platform application that allows users to search for books, read reviews, and write reviews.

## Features

- Read reviews of books
- Write reviews of books
- Rate books on a scale of 1-5
- View the average rating of a book
- View their submitted reviews and ratings
- Search for books by genre, title, or author (optional)
- Filter books by genre, rating or popularity (optional)
- Discussion forum for each book (optional)
- Save favorite books (optional)

## User Stories

As a Visitor:

1. Sign Up: I want to create an account so that I can log in and access the platform.
2. Login: I want to log in so that I can access my personalized dashboard and leave reviews and ratings.
3. View Books: I want to see a list of books so that I can read reviews and ratings.
4. View Book details: I want to view the details of a specific book so that I can see the average rating and reviews to decide if I want to read it.

As a Registered User:

1. Logout: I want to log out of my account so that no one else can access my account.
2. Write Review: I want to write a review for a book so that I can share my thoughts with others.
3. Edit/Delete My Review: I want to edit or delete my review so that I can update it or remove it if I change my mind.
4. Rate Book: I want to rate a book so that I can share my opinion with others.
5. Save Book: I want to save a book to my favorites so that I can easily access it later.
6. View My Reviews: I want to view all the reviews I have submitted so that I can see what I have written.
7. View My Favorite Books: I want to view all the books I have saved so that I can easily access them.
8. Manage my profile: I want to edit my profile information so that I can update my details.

As an Admin:

1. Manage Books: I want to add, edit, or delete books so that I can keep the platform up to date.
2. Manage Users: I want to view a list of all users so that I can monitor activity and manage accounts.
3. Manage Reviews: I want to view all reviews and ratings so that I can moderate content and remove inappropriate reviews.
4. Manage Ratings: I want to view all ratings so that I can monitor the popularity of books.

## Database Model Design

Entities:

1. User
2. Book
3. Review
4. Rating

Relationships:

- A User can have many Reviews
- A User can have many Ratings
- A User can have many Favorite Books
- A Book can have many Reviews
- A Book can have many Ratings

## Attributes

User:

- id
- username
- email
- password
- role (admin, user)
- created_at
- updated_at

Book:

- id
- title
- author
- genre
- description
- cover_image
- created_at
- updated_at

Review:

- user_id
- book_id
- content
- created_at
- updated_at

Rating:

- user_id
- book_id
- value
- created_at
- updated_at

## API Endpoints

### Authentication Endpoints

[x] POST /api/v1/auth/register : Register a new user  
[x] POST /api/v1/auth/login : Login a user  
[x] GET /api/v1/auth/logout : Logout a user  
[x] GET /api/v1/auth/me : Get current user

### User Endpoints

[ ] GET /api/v1/profile : Get user profile  
[ ] PUT /api/v1/profile : Update user profile  
[ ] DELETE /api/v1/profile : Delete user account  
[ ] GET /api/v1/profile/reviews : Get all reviews by user  
[ ] GET /api/v1/profile/ratings : Get all ratings by user  
[ ] GET /api/v1/books : Get all books  
[ ] GET /api/v1/books/:id : Get book by id

### Admin Endpoints

#### Manage Users

[ ] POST /api/v1/admin/users : Add a new user  
[ ] GET /api/v1/admin/users : Get all users  
[ ] GET /api/v1/admin/users/:id : Get user by id  
[ ] PUT /api/v1/admin/users/:id : Update user by id  
[ ] DELETE /api/v1/admin/users/:id : Delete user by id

#### Manage Books

[ ] GET /api/v1/admin/books : Get all books  
[ ] POST /api/v1/admin/books : Add a new book  
[ ] GET /api/v1/admin/books/:id : Get book by id  
[ ] PUT /api/v1/admin/books/:id : Update book by id  
[ ] DELETE /api/v1/admin/books/:id : Delete book by id

#### Manage Reviews

[ ] GET /api/v1/admin/reviews : Get all reviews  
[ ] GET /api/v1/admin/reviews/:id : Get review by id  
[ ] DELETE /api/v1/admin/reviews/:id : Delete review by id  
[ ] PUT /api/v1/admin/reviews/:id : Update review by id  
[ ] GET /api/v1/admin/reviews/book/:id : Get all reviews for a book  
[ ] GET /api/v1/admin/reviews/user/:id : Get all reviews by a user

#### Manage Ratings

[ ] GET /api/v1/admin/ratings : Get all ratings  
[ ] GET /api/v1/admin/ratings/:id : Get rating by id  
[ ] DELETE /api/v1/admin/ratings/:id : Delete rating by id  
[ ] PUT /api/v1/admin/ratings/:id : Update rating by id  
[ ] GET /api/v1/admin/ratings/book/:id : Get all ratings for a book  
[ ] GET /api/v1/admin/ratings/user/:id : Get all ratings by a user
