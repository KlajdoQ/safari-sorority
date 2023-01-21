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
  const [searchAnimals, setSearch] = useState("")

  const updateSearchAnimals = (searchInput) => {
    setSearch(searchInput)
    console.log(updateSearchAnimals)
  }

  const filteredAnimals = animals.filter(animal => animal.name.toLowerCase().includes(searchAnimals.toLowerCase()))

  return (
    <div>
        <Header />
        <Search 
          searchAnimals={searchAnimals}
          updateSearchAnimals={updateSearchAnimals}
          
        />
        <NewAnimalForm url={url} addNewAnimal={addNewAnimal}/>
        <PostsList animals={filteredAnimals}/>
    </div>
  )
}
