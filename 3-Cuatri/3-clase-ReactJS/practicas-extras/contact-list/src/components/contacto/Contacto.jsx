import React from 'react'

const Contacto = ({ name, number }) => {
  return (
    <div>
      {name} 
      <br />
      {number}
      <hr />
    </div>
  )
}

export default Contacto