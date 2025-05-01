import React from 'react'

const Filter = ({ filter, setFilter }) => {
  return (
    <div className='filter-container' style={{ marginBottom: "1rem", marginTop: "1rem" }}>
        <button 
            onClick={() => setFilter('todas')} 
            className={filter === 'todas' ? 'activo' : ''}
        >
            Todas
        </button>
        <button 
            onClick={() => setFilter('completadas')} 
            className={filter === 'completadas' ? 'activo' : ''}
        >
            Completadas
        </button>
        <button 
            onClick={() => setFilter('pendientes')} 
            className={filter === 'pendientes' ? 'activo' : ''}
        >
            Pendientes
        </button>
    </div>
  )
}

export default Filter