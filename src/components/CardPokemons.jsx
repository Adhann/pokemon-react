import React from 'react'
import { useHistory } from 'react-router-dom'
import loader from '../loader.gif'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite } from '../store/action'
import Swal from 'sweetalert2'

export default function CardPokemons(props) {
  const { pokemons, loading } = props
  
  const favorites = useSelector(state => state.favorites.favorites)
  const dispatch = useDispatch()

  const history = useHistory();

  const handleDetail = (id) => {
    history.push(`/pokemon/${id}`)
  }

  const handleAddFav = (pokemons) => {
    let isFound = false
    favorites.find((favorite) => {
      if (favorite.id === pokemons.id) {
        isFound = true
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${pokemons.name} is already in favorite!`,
          timer: 1500,
          timerProgressBar: true
        })
      }
    })
    
    if (!isFound) {
      Swal.fire({
        icon: 'success',
        text: `${pokemons.name} success add to favorite!`,
        timer: 1500,
        timerProgressBar: true
      })
      dispatch(addFavorite(pokemons))
    }

    history.push('/')
  }
  
  return (
    <>
        {loading ? (
          pokemons.map((pokemon) => (
            <div key={pokemon.id} className="my-1 px-1 w-full md:w-1/4 lg:my-4 lg:px-4 lg:w-1/4 animate-pulse">
              <article className="overflow-hidden rounded-lg shadow-md">

                <div className="mb-2 h-60 w-full bg-gray-200 overflow-hidden">
                  <img alt={loader} className="block h-64 w-full" src={loader}/>

                </div>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <div className="mb-2 h-5 w-full bg-gray-200 overflow-hidden rounded-full">
              
                  </div>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <div className="mb-2 h-5 w-40 bg-red-300 overflow-hidden rounded-full">
                  
                  </div>
                </footer>

              </article>
            </div>
          ))
        ) : ( 
          pokemons.map((pokemon) => (
            <div key={pokemon.id} className="my-1 px-1 w-full md:w-1/4 lg:my-4 lg:px-4 lg:w-1/4 transform hover:scale-105">
              <article className="overflow-hidden rounded-lg shadow-md bg-gray-900">

                <button className="w-full border-0" onClick={() => handleDetail(pokemon.id)}>
                  <img alt={pokemon.sprites.other.dream_world.front_default} className="block h-64 w-full pt-4" src={pokemon.sprites.other.dream_world.front_default}/>
                </button>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4 relative">
                  <h1 className="text-lg text-white capitalize">
                    {/* <a className="no-underline hover:underline text-white" href="/#"> */}
                      {pokemon.name}
                    {/* </a> */}
                  </h1>
                  {/* <a className="no-underline hover:underline text-white" href="/#"> */}
                  <button onClick={() => handleAddFav(pokemon)} type="button" className="no-underline hover:underline text-white">

                    {/* <i className="fas fa-heart absolute top-0 right-3 mt-2 text-4xl hover:text-4xl text-yellow-500 animate-bounce"></i> */}
                    <svg className="h-8 w-8 absolute top-0 right-3 mt-2 text-red-400 hover:text-red-500 fill-current animate-bounce mt-5" viewBox="0 0 24 24">
                      <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/>
                    </svg>
                  </button>
                  {/* </a> */}
                </header>

                <footer className="leading-none p-2 md:p-4 relative">
                  <div className="mb-14">
                    <span className="text-xs font-semibold py-1 px-2 rounded-full bg-yellow-600 uppercase last:mr-0 mr-1 text-white">
                      {pokemon.types[0].type.name}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 flex">
                    <button onClick={() => handleDetail(pokemon.id)} type="button" className="py-2 px-4 bg-transparent text-white font-semibold rounded bg-blue-600 hover:bg-blue-800 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 transform hover:scale-110">Detail</button>
                  </div>
                </footer>

              </article>
            </div>
          ))
        )}
    </>
  )
}