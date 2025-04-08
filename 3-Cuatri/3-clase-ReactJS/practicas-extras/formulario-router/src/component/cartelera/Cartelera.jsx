import React from 'react'

const Cartelera = ({ movies }) => {
  return (
    <div>
        {
            movies.map((movie, index) => (
                <div key={index}>
                    <h2>{movie.title}</h2>
                    <h3>{movie.director}</h3>
                    <img src={movie.image} alt={movie.title} />
                    <p>{movie.rating}</p>
                    <h3>¡Adquiera ya su ticket!</h3>
                    <p>Fecha y hora disponible: 
                        <span style={{ display: 'block' }}>{movie.date}</span> 
                        <span style={{ display: 'block' }}>{movie.time}</span>
                    </p>
                    <p>{movie.duration}</p>
                    <p style={{ display: 'inline' }}>Disponible en los cines: </p>
                    <p style={{ display: 'inline' }}>
                        {movie.cinema.map((cine) => <span className='cines'>{cine} </span>)}
                    </p>
                </div>
            ))
        }
    </div>
  )
}

export default Cartelera