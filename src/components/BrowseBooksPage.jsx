import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const BrowseBooksPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const books = useSelector((state) => state.books.books); // Ensure this path matches your state structure

  if (!Array.isArray(books)) {
    console.error('Books is not an array:', books);
    return null; // or handle the error appropriately
  }

  const categories = [...new Set(books.map(book => book.category))];

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="browse-books-container">
      <h1>Browse Books</h1>
      <div className="browse-books">
        <input
          type="text"
          placeholder="Search by title or author"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="categories-container">
          {categories.map(category => (
            <div key={category} className="category">
              <h2>{category}</h2>
              <ul>
                {filteredBooks
                  .filter(book => book.category === category)
                  .map(book => (
                    <li key={book.id}>
                      <Link to={`/books/${book.id}`}>{book.title}</Link> by {book.author}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseBooksPage;
