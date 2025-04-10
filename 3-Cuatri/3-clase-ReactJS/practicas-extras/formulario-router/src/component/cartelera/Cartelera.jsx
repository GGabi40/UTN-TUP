import React from 'react'
import Pelicula from './Pelicula'

const Cartelera = ({ movies }) => {
  return (
    <>
        <h1>🎫 Cartelera:</h1>
        <div className='container-movies'>
            {
                movies.map((movie, index) => (
                    <div key={index} className='movies'>
                        <Pelicula
                            id={movie.id}
                            title={movie.title}
                            director={movie.director}
                            image={movie.image}
                            rating={movie.rating}
                            // date={movie.date}
                            time={movie.time}
                            duration={movie.duration}
                            cine={movie.cinema}
                        />
                    </div>
                ))
        }
    </div>
    </>
  )
}

export default Cartelera