import React from 'react'
import FamilyMember from './FamilyMember'

function Family({ persons }) {
  return (
    <div>
        <div className="beers">
            {
                persons.map((person, index) => <FamilyMember key={index} name={person.name} age={person.age} />)
            }
        </div>
    </div>
  )
}

export default Family