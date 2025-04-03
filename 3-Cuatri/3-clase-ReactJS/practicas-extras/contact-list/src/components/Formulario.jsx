import React from 'react'
import { useState } from 'react'

const Formulario = ({ onAddContact }) => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        alert('Se agregó un nuevo contacto.');

        const contacto = {
            name,
            phone: number
        }

        onAddContact(contacto);

        setName("");
        setNumber("");
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Nombre de Contacto:</label>
            <input 
                type="text" 
                placeholder='Ingrese el nombre del Contacto'
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
            />

            <label>Número de teléfono:</label>
            <input 
                type="tel" 
                placeholder='Ingrese el número del Contacto'
                onChange={(e) => setNumber(e.target.value)}
                value={number}
                minLength={9}
                required
            />

            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default Formulario