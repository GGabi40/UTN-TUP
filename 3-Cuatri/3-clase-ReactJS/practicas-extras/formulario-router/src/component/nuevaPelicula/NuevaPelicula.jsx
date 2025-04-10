import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router';

const NuevaPelicula = ({ onNewMovie }) => {
    const navigate = useNavigate(); // utiliza para redirigir el usuario a otra pagina

    // 1. variables
    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const [duration, setDuration] = useState('');
    const [rating, setRating] = useState('');
    const [image, setImage] = useState('');
    const [cinema, setCinema] = useState([]);

    // 3. manejar submit
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!title || !director || !rating || cinema.length === 0) {
            alert('Hay campos vacíos.')
            return;
        }

        const movieData = {
            title,
            director,
            duration,
            rating,
            image: image === '' ? 'https://loremflickr.com/320/240' : image,
            cinema
        }

        // 4. llamar desde el padre
        onNewMovie(movieData);

        // 5. volver todo a 0
        setTitle("");
        setDirector("");
        setDuration("");
        setRating("");
        setImage("");
        setCinema([]);

        navigate('/'); // redirigir usuario a inicio
    }

    // 2. Declarar onChange || onClick || value -> depende de tí
    
  return (
    <>
        <h1>Agregar una nueva pelicula:</h1>
        <div className='container-formulario'>

            <form onSubmit={handleSubmit}>
                <label>Título</label>
                <input type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <label>Director</label>
                <input 
                    type="text"
                    onChange={(e) => setDirector(e.target.value)}
                    value={director}
                />
                <label>Duración</label>
                <input 
                    type="number" 
                    onChange={(e) => setDuration(e.target.value)}
                    value={duration}
                />
                <label>Calificación por edad</label>
                <select onChange={(e) => setRating(e.target.value)} value={rating}>
                    <option value="0">Ingrese una calificación</option>
                    <option value="Apta para todo público.">Apta para todo público.</option>
                    <option value="Apta para mayores de 13 años.">Apta para mayores de 13 años.</option>
                    <option value="Apta para mayores de 18 años.">Apta para mayores de 18 años.</option>
                </select>
                <label>Poster</label>
                <input 
                    type="url" 
                    placeholder='Ingrese una URL' 
                    onChange={(e) => setImage(e.target.value)}
                    value={image}
                />
                <label>Cine</label>
                <select 
                    multiple 
                    onChange={(e) => setCinema(Array.from(e.target.selectedOptions, option => option.value))} 
                    value={cinema}
                >
                    <option value="Nuevo Monumental">Nuevo Monumental</option>
                    <option value="Showcase Rosario">Showcase Rosario</option>
                    <option value="Cinemark Hoyts">Cinemark Hoyts</option>
                    <option value="Cines del centro">Cines del centro</option>
                    <option value="Cine 'El Cairo'">Cine "El Cairo"</option>
                    <option value="Las Tipas">Las Tipas</option>
                </select>

                <input type="submit" value="Enviar" />
            </form>
        </div>
    </>
  )
}

export default NuevaPelicula