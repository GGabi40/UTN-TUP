import './App.css'

import { useState } from 'react';

import initialContacts from './data/contacts';
import Contactos from './components/contactos/Contactos'
import Formulario from './components/Formulario'


function App() {
  const [contacts, setContact] = useState(initialContacts);

  const createContact = (data) => {
    setContact((prevContacts) => {
      return [...prevContacts, data];
    });
  }

  return (
   <div>
      <Formulario onAddContact={createContact} />
      <Contactos contacts={contacts} />
   </div>
  )
}

export default App
