import React, { useState } from 'react'


export default function Posts({animal,addLikes}) {
  const{name, type, description, id,likes} = animal
  const handleLikes = () => {
    fetch(`http://localhost:3000/animals/${id}`,{
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({likes:animal.likes+ 1})
    })
    .then(response => response.json()) 
    .then(addLikes)

  }

  function handleDelete() {

  }

  return (
    <li className="posts">
      <img className= "animal-image" src={animal.image} alt={animal.name} />
      <h2 className='name'>{animal.name}</h2>
      <h4 className='type'>{animal.type}</h4>
      <p className='description'><i>{animal.description}</i> </p>
        <div className='likes-delete'>
          <button className='Likes' onClick={handleLikes}>{likes}🐾</button>
          <button className='Delete' onClick={handleDelete}>Delete</button>
        </div>
      
    </li>
  )
}
