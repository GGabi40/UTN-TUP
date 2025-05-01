import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const NewTask = ({ onTaskCreated }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!title.trim()) return; // evita que se envíe el formulario vacío

        try {
            const user = JSON.parse(localStorage.getItem('user'));
            const response = await axios.post('http://localhost:3000/api/task', {
                title: title.split('')[0].toUpperCase() + title.slice(1),
                completed: false,
                user: user._id
            });
            onTaskCreated(response.data); // se envía al padre
            setTitle('');
        } catch(e) {
            console.error("💥 Error al crear la tarea:", e.message);
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Nueva tarea..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">Agregar</button>
        </form>
    </div>
  )
}

export default NewTask