import React from 'react'
import { useSelector } from 'react-redux'
import CardFavorites from '../components/CardFavorites'

export default function Favorite() {

  const favorites = useSelector(state => state.favorites.favorites)
  // console.log(favorites, '<<<<<<<< FAV');

  return (
    <>
          
    <main className="container mb-auto my-5 mx-auto px-4 md:px-5 lg:px-16">
      <p className="text-center uppercase text-4xl py-5">list all your favorite pokemon</p>
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        <CardFavorites favorites={ favorites }/>
      </div>
    </main>
    </>
  )
}