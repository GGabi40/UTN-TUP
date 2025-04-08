import { useState } from 'react'
import './App.css'
import movies from './data/movies'

import Cartelera from './component/cartelera/Cartelera'
import NuevaPelicula from './component/nuevaPelicula/NuevaPelicula'

function App() {
  const [movieData, setMovieData] = useState(movies);

  const handleNewMovie = (movieData) => {
    setMovieData((prevMovies) => {
      return [movieData, ...prevMovies]
    })
  }

  return (
    <>
      <h1>🎫 Cartelera:</h1>
      <Cartelera movies={movies} />
      <h2>Agregar una nueva pelicula:</h2>
      <NuevaPelicula onNewMovie={handleNewMovie} />
    </>
  )
}

export default App
