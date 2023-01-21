import React, {useState, useEffect}from 'react'
import Header from './Header/Header'
import Search from './Search'
import NewAnimalForm from "./NewAnimalForm"
import PostsList from './PostsList'
import { Switch, Route } from "react-router-dom"


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
  const [isLoading, setIsLoading] = useState("false")

  const updateSearchAnimals = (searchInput) => {
    setSearch(searchInput)
    console.log(updateSearchAnimals)
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
    }else{
    
    }
  });
  return (
    <div>
      <Header />
      <Switch>
      <Route exact path="/">
          <PostsList animals={filteredAnimals}/>
        </Route>
        <Route path="/search">
          <Search 
            searchAnimals={searchAnimals}
            updateSearchAnimals={updateSearchAnimals}  
          />
        </Route>
        <Route path="/new">
          <NewAnimalForm url={url} addNewAnimal={addNewAnimal}/>
        </Route>
      </Switch>
    </div>
  )
}
