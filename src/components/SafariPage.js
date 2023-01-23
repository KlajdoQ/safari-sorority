import React from 'react'
import Header from './Header/Header'
import Search from './Search'
import NewAnimalForm "./NewAnimalForm"
import PostsList from './PostsList'

export default function SafariPage() {
  return (
    <div>
        <Header />
        <Search />
        <NewAnimalForm />
        <PostsList />
    </div>
  )
}
