import React, { useState } from 'react'
import CommentSection from "./CommentSection"
import NewComments from "./NewComments"

function generateRandomIntegerInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let value5 = generateRandomIntegerInRange(10000, 20000);

 function Posts({animal,addLikes,deleteAnimal, url}) {
  const{name, type, description, id,likes,image} = animal
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
    fetch(`http://localhost:3000/animals/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(deleteAnimal(animal))
  }

  // COMMENT SECTION, COMMENT, AND NEW COMMENT
  // FUNCTIONS, USESTATES, AND CB FUNCS
  const [comments, setComments] = useState(animal.comments)
//    setComments(animal.comments)


   const addNewComment = (newComment) => {
      const newData = [...comments, ...newComment.comments];
      setComments(newData)
   }


  return (
    <li className="posts">
      <img className= "animal-image" src={image} alt={animal.name} />
      <h2 className='name'>{name}</h2>
      <h4 className='type'>{type}</h4>
      <p className='description'><i>{description}</i> </p>
        <div className='likes-delete'>
          <button className='Likes' onClick={handleLikes}>{likes}🐾</button>
          <button className='Delete' onClick={handleDelete}>Delete</button>
        </div>
      <CommentSection  value5={value5} comments={comments}/>
      <NewComments   url={url} addNewComment={addNewComment}/>
    </li>
  )
}

export default Posts
