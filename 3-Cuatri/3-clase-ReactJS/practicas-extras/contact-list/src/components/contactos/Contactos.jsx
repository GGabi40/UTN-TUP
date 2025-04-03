import React from 'react'
import { useState } from 'react'

import Contacto from '../contacto/Contacto'
import Busqueda from '../Busqueda'

const Contactos = ({ contacts }) => {
    const [search, setSearch] = useState("");

    const hanleSearch = (value) => setSearch(value);

    // split -> separa
    // join -> los vuelve a unir
    // Los usé para separar los numeros que estén separados por ESPACIO
    // luego, los vuelvo a unir.
    // ejemplo -> '341 555-1020'.split(' ').join('') --> 341555-1020
    const filteredContacts = contacts
        .filter(contact => (contact.name.toLowerCase().includes(search.toLocaleLowerCase()) || contact.phone.split(' ').join('').includes(search.split(' ').join(''))))
        .map((contact, index) => (
            <Contacto
                name={contact.name}
                number={contact.phone}
                key={index}
            />
        ))

  return (
    <div>
        <Busqueda onSearch={hanleSearch} search={search} />

        <div className='lista-contactos'>
            {filteredContacts.length ? filteredContacts : <p>Contacto "{search}" no encontrado.</p>}
        </div>
    </div>
  )
}

export default Contactos