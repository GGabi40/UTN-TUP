import './detalle.css';
import React from "react";
import NotFound from '../notFound/NotFound';
import { useParams, Link } from "react-router";


const DetallePelicula = ({ movies }) => {
  const { id } = useParams(); // accede al parámetro :id

  const peli = movies.find((m) => String(m.id) === id); // encontrar pelicula

  if (!peli) {
    return <NotFound /> // Si no encuentro la pelicula: No encontrado
  }

  return (
    <div className="container-details">
      <div className="container-info">
        <h1>{peli.title}</h1>
        <h3>Dirigida por: {peli.director}</h3>
        <p>
          <strong>Duración:</strong> {peli.duration} minutos
        </p>
        <p>
          <strong>Clasificación:</strong> {peli.rating}
        </p>
        {/* <p>
           <strong>Fecha:</strong> {peli.date || "No especificada"} 
        </p> */}
        <p>
          <strong>Hora:</strong> {peli.time || "No especificada"}
        </p>
        <p>
          <strong>Cines:</strong>
        </p>
        <ul>
          {peli.cinema.map((cine, index) => (
            <li key={index}>{cine}</li>
          ))}
        </ul>
      </div>
      <div className="container-img">
        <img
          src={peli.image}
          alt={peli.title}
          style={{ width: "300px", borderRadius: "8px" }}
        />
      </div>
      <Link to="/" className="btn-volver">← Volver</Link>
    </div>
  );
};

export default DetallePelicula;
