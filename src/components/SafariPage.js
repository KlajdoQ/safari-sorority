import React, {useState, useEffect}from 'react'
import Header from './Header/Header'
import Search from './Search'
import NewAnimalForm from "./NewAnimalForm"
import PostsList from './PostsList'
import Pictures from './Pictures'
import { Switch, Route } from "react-router-dom"


export default function SafariPage() {
  const [animals, setAnimals] = useState([])
  const [searchAnimals, setSearch] = useState("")

  const url = 'http://localhost:3000/animals'
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(setAnimals)
  }, [])



 // ADDING NEW ANIMAL (FORM CB FUNCTION)
  const addNewAnimal = (newAnimal) => {
    const newData = [newAnimal,...animals ]
    setAnimals(newData)
  }

  const updateSearchAnimals = (searchInput) => {
    setSearch(searchInput)
  }

  function addLikes(likesToAdd) {
    setAnimals(animals.map(animal => animal.id === likesToAdd.id? likesToAdd : animal))
  }

  function deleteAnimal(animalToDelete) {
    setAnimals(animals.filter(animal => animal.id !== animalToDelete.id))
  }
  // const filteredAnimals = animals.filter(animal => animal.name.toLowerCase().includes(searchAnimals.toLowerCase()))
  const filteredAnimals = animals.filter(animal => {
    if (animal === "") {
      //if query is empty
      return animal;
    } else if (animal.name.toLowerCase().includes(searchAnimals.toLowerCase())) {
      //returns filtered array
      return animal;
    }else if (animal.type.toLowerCase().includes(searchAnimals.toLowerCase())) {
      return animal;
    }
  });
  return (
    <div className='main'>
      <Header />
      <Switch>
      <Route exact path="/">
        <Search
            searchAnimals={searchAnimals}

            updateSearchAnimals={updateSearchAnimals}
            className='search-animals'
          />
          <PostsList animals={filteredAnimals} deleteAnimal={deleteAnimal} addLikes={addLikes}/>
        </Route>
        <Route path="/pictures">
          <Pictures />
        </Route>
        <Route path="/new">
          <NewAnimalForm url={url} addNewAnimal={addNewAnimal}/>
        </Route>
      </Switch>
    </div>
  )
}
