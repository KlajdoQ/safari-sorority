import React from 'react'

export default function Posts() {
  return (
    <li className="card">
      <img src={"https://via.placeholder.com/400"} alt={"Animal Name"} />
      <h4>{"Animal name"}</h4>
      <p>description: {"Animal description"}</p>
      <button className='Likes'>Like🐾</button>
    </li>
  )
}
