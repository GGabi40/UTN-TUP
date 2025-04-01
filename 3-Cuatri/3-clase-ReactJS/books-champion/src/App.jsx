import { useState } from 'react'

import './app.css'
import Books from './components/books/Books'
import NewBook from './components/newBook/NewBook'

import initialBooks from './data/books'

function App() {
  const [books, setBooks] = useState(initialBooks);

  // Esta función viene del componente "NewBook"
  const handleBookAdded = (enteredBook) => {
    const bookData = {
      ...enteredBook,
      id: Math.random().toString(),
      bookRating: Array(enteredBook.bookRating).fill('⭐').join('')
    };

    //       prev -> Agarra lo previo
    setBooks((prevBooks) => {
      return [...prevBooks, bookData]; // agarra lo previo y agrega lo nuevo
    })
  }

  return (
    <>
    <div className="container">
      <h2>Books Champions App</h2>
      <h3>Agregar Nuevos Libros:</h3>

      <NewBook onBookAdded={handleBookAdded} />
      <Books books={books} />  
    </div>
    </>
  )
}

export default App
