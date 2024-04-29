// App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import BookDetailsPage from './components/BookDetailsPage';
import BooksPage from './components/BooksPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<BooksPage />} /> {/* Default route for the root URL */}
          <Route path="/books/:id" element={<BookDetailsPage />} />
          <Route path="/books" element={<BooksPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
