import React from 'react'
import Posts from "./Posts"



export default function PostsList({animals,addLikes}) {

  
  return (
    // <Posts/>
    <ul className="Posts">{animals.map(animal => 
    <Posts animal={animal} 
    key={animal.id}
    addLikes={addLikes} 
    />)}</ul>
  )
}
