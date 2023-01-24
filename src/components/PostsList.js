import React from 'react'
import Posts from "./Posts"



export default function PostsList({animals}) {

  return (
    <div>
      <ul className="Posts">{animals.map(animal => <Posts animal={animal} key={animal.id}/>)}</ul>
    </div>
  )
}
