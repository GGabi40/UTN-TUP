import React, { useState } from 'react'

/* 
1 - Crear un componente llamado Change Dollar que nos permita actualizar el dólar y
automáticamente se actualice el precio de cada cerveza en el listado de las mismas

2 - Crear un state para que se muestre o se esconda el componente para cambiar el valor
del dólar.
*/

function ChangeDollar({ exchangeRate, setExchangeRate }) {
    const [show, setShow] = useState(false); // arranca en falso: no mostrará el formulario

    const handleDollar = (ev) => {
        ev.preventDefault();
        setExchangeRate(Number(ev.target[0].value))
    }

    // al tocar el boton de mostrar u ocultar:
    //      cambia de false -> true O de true -> false
    const handleShow = () => {
        setShow(!show);
    }
    
    // lo mejor es hacerlo adentro de "onClick", por ejemplo:
    /*
        <button onClick={() => setShow(!show)}>
            {show ? 'Ocultar' : 'Mostrar'}
        </button>
    */

  return (
    <div>
        <button onClick={handleShow}>
            {/* IF     TRUE  else  FALSE */}
            {show ? 'Ocultar' : 'Mostrar'}
        </button>

        {
            show &&
            <form onSubmit={handleDollar}>
                <label>Ingrese la cotización del dólar hoy:</label>
                <input type="number" min={0} placeholder={exchangeRate} /* onChange={(e) => setExchangeRate(Number(e.target.value))} */ />
                <input type="submit" value="Enviar" />
            </form>
            /* estructura equivalente a: if(show) { return <form>... } */
        }
        
    </div>
  )
}

export default ChangeDollar