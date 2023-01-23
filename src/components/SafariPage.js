import React from 'react'
import Header from './Header/Header'
import Search from './Search'
import NewAnimalForm from  "./NewAnimalForm"
import PostsList from './PostsList'

export default function SafariPage() {

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
        <PostsList />
    </div>
  )
}
