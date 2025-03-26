import React from 'react'

import BookItem from '../booksItem/BookItem'

function Books({books}) {
  return (
    <>
    <div className="container-books">
    {
        books.map((book, index) => {
          return (
            <BookItem 
              key={index}
              bookTitle={book.bookTitle}
              author={book.bookAuthor}
              rating={book.bookRating}
              pageCount={book.pageCount}
              imageUrl={book.imageUrl}
            />
          )
        })
    }
    </div>
    </>
  )
}

export default Books