import React, {useState, useEffect}from 'react'
import Header from './Header/Header'
import Search from './Search'
import NewAnimalForm from "./NewAnimalForm"
import PostsList from './PostsList'


export default function SafariPage() {
  const [animals, setAnimals] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/animals')
    .then(res => res.json())
    .then(setAnimals)
  }, [])



  // ADDING NEW ANIMAL (FORM CB FUNCTION)
  // const addNewAnimal = (newAnimal) => {
  //   const newData = [...whatever-the-name-of-the-og-data-is, newAnimal]
  //   whatever-the-name-of-the-setter-func-is(newData)
  // }

  return (
    <div>
        <Header />
        <Search />
        <NewAnimalForm />
        <PostsList animals={animals}/>
    </div>
  )
}
