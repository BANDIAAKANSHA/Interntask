// BookDetailsPage.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';

function BookDetailsPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    async function fetchBookDetails() {
      try {
        const response = await axios.get(`https://softwium.com/api/books/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    }

    fetchBookDetails();
  }, [id]);

  return (
    <div className="container book-details">
      <h1>Book Details</h1>
      {book ? (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>ISBN</th>
              <th>Page Count</th>
              <th>Authors</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{book.title}</td>
              <td>{book.isbn}</td>
              <td>{book.pageCount}</td>
              <td>{book.authors.join(', ')}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default BookDetailsPage;
