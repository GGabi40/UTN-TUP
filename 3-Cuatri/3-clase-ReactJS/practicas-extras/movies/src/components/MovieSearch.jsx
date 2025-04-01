import React from 'react'

const MovieSearch = ({ MovieSearch, setMovieSearch }) => {
  return (
    <div>
        <form>
            <label>Buscar una pelicula:</label>
            <input
                type="text"
                placeholder='Ingrese el nombre de la pelicula'
                value={MovieSearch}
                onChange={(e) => setMovieSearch(e.target.value)}
            />
        </form>
    </div>
  )
}

export default MovieSearch