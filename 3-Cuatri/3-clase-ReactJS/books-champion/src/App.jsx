import BookItem from './components/booksItem/BookItem'
import books from './data/books'

function App() {

  return (
    <>
      <h2>Book champions app</h2>
      <p>¡Quiero leer libros!</p>
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
    </>
  )
}

export default App
