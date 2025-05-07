import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetailsPage = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.books.books);
  const book = books.find(book => book.id === parseInt(id));

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="book-details-container">
      <h1>Book Details</h1>
      <div className="book-details">
        <h1>{book.title}</h1>
        <p>Author name: {book.author}</p>
        <p>Book Description: {book.description}</p>
        <p className="rating">Rating: {book.rating}</p>
        <Link to="/browse">Back to Browse</Link>
      </div>
    </div>
  );
};

export default BookDetailsPage;
