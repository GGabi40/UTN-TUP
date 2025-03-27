import React from 'react'
import Person from './Person'

function Persons({ personsName }) {
  return (
    <div>
        <div className="beers">
            {
                personsName.filter((personName) => personName.split('')[0] === "P")
                .map((nameWithP) => <Person person={nameWithP} />)
            }
        </div>
    </div>
  )
}

export default Persons