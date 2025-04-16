import React, { useState } from "react";

import NewBook from "../newBook/NewBook";
import Books from "../books/Books";
import initialBooks from '../../data/books'

const Dashboard = () => {
  const [books, setBooks] = useState(initialBooks);

  // Esta función viene del componente "NewBook"
  const handleBookAdded = (enteredBook) => {
    const bookData = {
      ...enteredBook,
      id: Math.random().toString(),
      bookRating: Array(enteredBook.bookRating).fill("⭐").join(""),
    };

    //       prev -> Agarra lo previo
    setBooks((prevBooks) => {
      return [...prevBooks, bookData]; // agarra lo previo y agrega lo nuevo
    });
  };

  return (
    <div className="container">
      <h2>Books Champions App</h2>
      <h3>Agregar Nuevos Libros:</h3>

      <NewBook onBookAdded={handleBookAdded} />
      <Books books={books} />
    </div>
  );
};

export default Dashboard;
