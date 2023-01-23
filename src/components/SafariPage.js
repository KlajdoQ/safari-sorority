import React from 'react'
import Header from './Header/Header'
import Search from './Search'
import Form from './Form'
import PostsList from './PostsList'

export default function SafariPage() {
  return (
    <div>
        <Header />
        <Search />
        <Form />
        <PostsList />
    </div>
  )
}
