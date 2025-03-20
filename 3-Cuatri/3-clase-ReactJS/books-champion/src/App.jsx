import BookItem from './components/booksItem/BookItem'

function App() {
  // SIMULA bbdd: -- No hacerlo en el proyecto final --
  const books = [
    {
      title: "Cien años de soledad",
      author: "Gabriel García Márquez",
      rating: 4.8,
      pageCount: 417,
      available: true
    },
    {
      title: "1984",
      author: "George Orwell",
      rating: 4.7,
      pageCount: 328,
      available: false
    },
    {
      title: "El Principito",
      author: "Antoine de Saint-Exupéry",
      rating: 4.9,
      pageCount: 96,
      available: true
    },
    {
      title: "Don Quijote de la Mancha",
      author: "Miguel de Cervantes",
      rating: 4.5,
      pageCount: 863,
      available: true
    },
    {
      title: "Fahrenheit 451",
      author: "Ray Bradbury",
      rating: 4.6,
      pageCount: 256,
      available: false
    },
    {
      title: "Los juegos del hambre",
      author: "Suzanne Collins",
      rating: 4.8,
      pageCount: 374,
      available: true
    },
    {
      title: "Orgullo y prejuicio",
      author: "Jane Austen",
      rating: 4.7,
      pageCount: 279,
      available: true
    } ];

  return (
    <>
      <h2>Book champions app</h2>
      <p>¡Quiero leer libros!</p>
      {
        books.map((book) => {
          return (
            <BookItem 
              bookTitle={book.title}
              author={book.author}
              rating={book.rating}
              pageCount={book.pageCount}
            />
          )
        })
      }
    </>
  )
}

export default App
