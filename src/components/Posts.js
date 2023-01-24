import React from 'react'


export default function Posts({animal}) {
  
  
  return (
    <li className="posts">
      <img src={animal.image} alt={animal.name} />
      <h2>{animal.name}</h2>
      <h4>{animal.type}</h4>
      <p><i>{animal.description}</i> </p>
      <button className='Likes'>Like🐾</button>
    </li>
  )
}
