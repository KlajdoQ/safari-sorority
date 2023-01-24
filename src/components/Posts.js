import React, { useState } from 'react'
import Comments from "./Comments"

export default function Posts({animal}) {
  const [likes, setLikes] = useState(0)
  const handleLikes = () => setLikes(prevCount => prevCount + 1)
  return (
    <li className="posts">
      <img src={animal.image} alt={animal.name} />
      <h2>{animal.name}</h2>
      <h4>{animal.type}</h4>
      <p><i>{animal.description}</i> </p>
      <div><Comments/></div>
      <button className='Likes' onClick={handleLikes}>{likes}🐾</button>
      
    </li>
  )
}
