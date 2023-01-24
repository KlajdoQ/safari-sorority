import React, {useState, useEffect}from 'react'
import Header from './Header/Header'
import Search from './Search'
import NewAnimalForm from "./NewAnimalForm"
import PostsList from './PostsList'


export default function SafariPage() {
  const [animals, setAnimals] = useState([])

  const url = 'http://localhost:3000/animals'
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(setAnimals)
  }, [])



 // ADDING NEW ANIMAL (FORM CB FUNCTION)
  const addNewAnimal = (newAnimal) => {
    const newData = [...animals, newAnimal]
    setAnimals(newData)
  }
function addLikes(newLikes) {
  setAnimals(animals.map(animal => animal.id === newLikes.id? newLikes : animal))
}


function deleteAnimal(animalToDelete) {
  setAnimals(animals.filter(animal =>animal.id !== animalToDelete.id))
}
  return (
    <div>
        <Header />
        <Search />
        <NewAnimalForm url={url} addNewAnimal={addNewAnimal}/>
        <PostsList animals={animals} addLikes={addLikes} deleteAnimal={deleteAnimal}/>
    </div>
  )
}
