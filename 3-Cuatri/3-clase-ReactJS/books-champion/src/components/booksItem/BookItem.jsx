import React from 'react'

function BookItem({bookTitle, author, rating, pageCount}) {

  return (
    <div>
        <h2>{bookTitle}</h2>
        <h3>{author}</h3>
        <div>{rating} Estrellas</div>
        <p>{pageCount} páginas</p>
    </div>
  )
}

export default BookItem