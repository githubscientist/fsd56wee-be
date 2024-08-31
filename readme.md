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

[x] GET /api/v1/user : Get user account  
[x] PUT /api/v1/user : Update user account  
[x] DELETE /api/v1/user : Delete user account  
[ ] GET /api/v1/user/reviews : Get all reviews by user  
[ ] POST /api/v1/user/reviews : Add a new review
[ ] GET /api/v1/user/ratings : Get all ratings by user  
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

[x] GET /api/v1/admin/books : Get all books  
[x] POST /api/v1/admin/books : Add a new book  
[x] GET /api/v1/admin/books/:id : Get book by id  
[x] PUT /api/v1/admin/books/:id : Update book by id  
[x] DELETE /api/v1/admin/books/:id : Delete book by id

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

Example book:

```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "genre": "Fiction",
  "description": "The Great Gatsby is a novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
  "image": "https://images-na.ssl-images-amazon.com/images/I/51K84pPwz-L._SX331_BO1,204,203,200_.jpg"
}

{
  "title": "To Kill a Mockingbird",
  "author": "Harper Lee",
  "genre": "Fiction",
  "description": "To Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately successful, winning the Pulitzer Prize, and has become a classic of modern American literature. The plot and characters are loosely based on Lee's observations of her family, her neighbors and an event that occurred near her hometown of Monroeville, Alabama, in 1936, when she was 10 years old.",
  "image": "https://images-na.ssl-images-amazon.com/images/I/51K84pPwz-L._SX331_BO1,204,203,200_.jpg"
}

{
  "title": "1984",
  "author": "George Orwell",
  "genre": "Fiction",
  "description": "1984 is a dystopian social science fiction novel by English novelist George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell's ninth and final book completed in his lifetime. Thematically, Nineteen Eighty-Four centres on the consequences of totalitarianism, mass surveillance, and repressive regimentation of persons and behaviours within society.",
  "image": "https://images-na.ssl-images-amazon.com/images/I/51K84pPwz-L._SX331_BO1,204,203,200_.jpg"
}
```

Sample data for reviews:
  
  ```json
  {
    "user_id": 1,
    "book_id": 1,
    "content": "This is a great book. I highly recommend it."
  }
  
  {
    "user_id": 2,
    "book_id": 1,
    "content": "I didn't like this book. It was boring."
  }
  
  {
    "user_id": 3,
    "book_id": 2,
    "content": "This book is a classic. A must-read for everyone."
  }
  ```