import React from 'react'
import { useState } from 'react'

export default function Text() {
    const [show, setShow] = useState(true);

    const handleShow = () => {
        setShow(!show);
    }

  return (
    <div>
        <button onClick={handleShow}>{show ? 'Ocultar' : 'Mostrar'}</button>
        {show && <h2>Hola Mundo!</h2>}
    </div>
  )
}
