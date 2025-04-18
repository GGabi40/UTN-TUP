import React from 'react'
import { useState } from 'react'

export default function Counter() {
    const [number, setNumber] = useState(0);

    const sumar = () => {
        setNumber(number+1);
    }

    const restar = () => {
        setNumber(number-1);
    }

  return (
    <div>
        <button onClick={sumar}>Sumar</button>
        {number}
        <button onClick={restar}>Restar</button>
    </div>
  )
}
