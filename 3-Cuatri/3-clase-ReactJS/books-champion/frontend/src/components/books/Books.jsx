import React, { useState } from 'react'

import BookItem from '../booksItem/BookItem'
import BookSearch from '../bookSearch/BookSearch'

function Books({books}) {
  const [search, setSearch] = useState("");

  const handleSearch = (value) => setSearch(value);

  const filteredBooks = books
      .filter(book => search ? (book.bookTitle.toLowerCase().includes(search.toLowerCase()) || book.bookAuthor.toLowerCase().includes(search.toLowerCase())) : book)
      .map((book, index) => (
        <BookItem 
          key={index}
          bookTitle={book.bookTitle}
          author={book.bookAuthor}
          rating={book.bookRating}
          pageCount={book.pageCount}
          imageUrl={book.imageUrl}
        />
      ))

  return (
    <>
    <BookSearch onSearch={handleSearch} search={search} />

    <div className="container mt-4">
      <div className="row gy-4">
        {
          filteredBooks.length ? filteredBooks : <p>No se encontraron libros.</p>
        }
        </div>
    </div>
    
    </>
  )
}

export default Books