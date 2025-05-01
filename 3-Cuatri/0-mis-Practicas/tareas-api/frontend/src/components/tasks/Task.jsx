import React from 'react'
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const Task = ({ id, title, completed, onComplete, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus(); // enfocamos al input al entrar en edición
    }
  }, [isEditing]); // "Ejecutá este código cada vez que isEditing cambie"

  const handleComplete = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/api/task/${id}`, {
        completed: !completed
      });

      onComplete(id, response.data.completed);
    } catch (e) {
      console.error('Error al actualizar tarea: ', e);
    }
  }

  const handleDelete = async () => {
    const confirmar = window.confirm('¿Estás segura de que querés eliminar esta tarea?');

    if (confirmar) {
      try {
        await axios.delete(`http://localhost:3000/api/task/${id}`);
        onDelete(id);
      } catch(e) {
        console.error('Error al eliminar tarea: ', e);
      }
    }
  }

  const handleEditSubmit = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/api/task/${id}`, {
        title: editedTitle.split('')[0].toUpperCase() + editedTitle.slice(1)
      });

      setIsEditing(false);
      onEdit(id, response.data.title);
    } catch(e) {
      console.error('Error al editar tarea: ', e);
    }
  }

  return (
    <div>
        <li 
          key={id} 
          className='li-task' 
          style={{ textDecoration: completed ? 'line-through' : 'none' }}
        >
            <div className='li-task-title'>
              {isEditing ? (
                  <input 
                    ref={inputRef} // referencia al input
                    type="text" 
                    value={editedTitle} 
                    onChange={(e) => setEditedTitle(e.target.value)}
                    onKeyDown={(e) => { 
                      if (e.key === 'Enter') {
                        e.preventDefault(); 
                        handleEditSubmit(); 
                      } 
                    }}
                  />
                  ) : (title)}
            </div>

            <div className="li-task-btns">
              {isEditing ? (
                  <>
                    <button onClick={handleEditSubmit}>💾 Guardar</button>
                    <button onClick={() => setIsEditing(false)}>❌ Cancelar</button>
                  </>
                ) : (
                  <>
                    <button onClick={handleComplete}>
                      {completed ? "Desmarcar" : "Completar"}
                    </button>
                    <button onClick={() => setIsEditing(true)} style={{ marginLeft: "10px"}}>
                      ✏️ Editar
                    </button>
                    <button onClick={handleDelete} style={{ marginLeft: "10px", color: "red" }}>
                      🗑 Eliminar
                    </button>
                  </>
                )}
            </div>
        </li>
    </div>
  )
}

export default Task