import React from 'react'

function FamilyMember({ name, age }) {
  return (
    <div>
        <div className="card">
            <h3>{name}</h3>
            <p>Edad: <strong>{age} años</strong>.</p>
        </div>
    </div>
  )
}

export default FamilyMember