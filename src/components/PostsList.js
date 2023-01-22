import React from 'react'
import Posts from "./Posts"



export default function PostsList({animals,addLikes,deleteAnimal}) {

  return (
    // <Posts/>

    <div>
      <ul className="Posts">{animals.map(animal =>
      <Posts
      animal={animal}
      key={animal.id}
      addLikes={addLikes}
      deleteAnimal={deleteAnimal}
      />)}</ul>
    </div>

  )
}
