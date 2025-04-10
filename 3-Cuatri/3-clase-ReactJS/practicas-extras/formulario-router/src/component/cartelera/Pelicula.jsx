import { useState } from "react";
import React from "react";
import { Link } from "react-router";
import Modal from "../modal/Modal";

const Pelicula = ({ id, title, director, image, rating, time, duration, cine }) => {
  // const formattedDate = date.split('-').reverse().join('/');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <h2>{title}</h2>
      <h3>{director}</h3>
      <img src={image} alt={title} />
      <p>{rating}</p>
      <h3>¡Adquiera ya su ticket!</h3>
      <p>
        Fecha y hora disponible:
        {/* <span style={{display: "block"}}>{formattedDate}</span> */}
        <span style={{display: "block"}}>{time}</span>
      </p>
      <p>{duration} min</p>
      <p style={{ display: "inline" }}>Disponible en los cines: </p>
      <p style={{ display: "inline" }}>
            {cine.map((cine) => (
              <span className="cines">{cine} </span>
            ))}
      </p>
      <div className="botones">
        <button className="eliminar" onClick={() => setModalIsOpen(true)}>Eliminar</button>
        <Link to={`/detalle/${id}`} className="detalles">Más Detalles</Link>
      </div>

      {/* MODAL */}
      <Modal 
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Confirmar Eliminación"
      />
    </>
  );
};

export default Pelicula;
