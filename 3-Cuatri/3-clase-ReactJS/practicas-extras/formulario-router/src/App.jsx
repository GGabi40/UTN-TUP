import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'

import initialMovies from './data/movies' // peliculas iniciales
import Cartelera from './component/cartelera/Cartelera'
import NuevaPelicula from './component/nuevaPelicula/NuevaPelicula'

import NavBar from './component/navBar/NavBar'
import DetallePelicula from './component/detalle/DetallePelicula'
import NotFound from './component/notFound/NotFound'

function App() {
  const [movieData, setMovieData] = useState(initialMovies);

  const handleNewMovie = (newMovie) => {
    const movieObj = {
      ...newMovie,
      id: Math.floor(Math.random() * 500).toString() // genero un numero aleatorio para ID
    }

    setMovieData((prevMovies) => {
      return [...prevMovies, movieObj]
    })
  }

  return (
    <>
    {/* Definir rutas */}
    <BrowserRouter>
      <NavBar /> {/* Siempre aparecerá, en todas las paginas */}
      <Routes>
        <Route path='/' element={<Cartelera movies={movieData} />} />
        <Route path='/nuevaPelicula' element={<NuevaPelicula onNewMovie={handleNewMovie} />} />
        <Route path='/detalle/:id' element={<DetallePelicula movies={movieData} />} />
        {/*       Me lleva a: /detalle/5, por ejemplo   */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
