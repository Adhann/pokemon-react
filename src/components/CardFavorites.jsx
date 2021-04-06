import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';

export default function CardFavorites(props) {
  const { favorites } = props
  const dispatch = useDispatch()

  const history = useHistory();

  const handleDetail = (id) => {
    history.push(`/pokemon/${id}`)
  }

  const handleDeleteFav = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
  return (
    <>
    { 
      favorites.length === 0 ? (
        <div>You don't have a favorite Pokemon yet</div>
      ) : (
        favorites.map((favorite) => (
          <div key={favorite.id} className="my-1 px-1 w-full md:w-1/4 lg:my-4 lg:px-4 lg:w-1/4 transform hover:scale-105">
          <article className="overflow-hidden rounded-lg shadow-md bg-gray-900">

            <button className="w-full border-0" onClick={() => handleDetail(favorite.id)}>
              <img alt={favorite.sprites.other.dream_world.front_default} className="block h-64 w-full pt-4" src={favorite.sprites.other.dream_world.front_default}/>
            </button>

            <header className="flex items-center justify-between leading-tight p-2 md:p-4 relative">
              <h1 className="text-lg text-white capitalize">
                  {favorite.name}
              </h1>
            </header>

            <footer className="leading-none p-2 md:p-4 relative">
              <div className="mb-4">
                <span className="text-xs font-semibold py-1 px-2 rounded-full bg-yellow-600 uppercase last:mr-0 mr-1 text-white">
                  {favorite.types[0].type.name}
                </span>
              </div>
              <div className="text-right">
                <button onClick={() => handleDetail(favorite.id)} type="button" className="mx-5 py-2 px-4 bg-transparent text-white font-semibold rounded bg-blue-600 hover:bg-blue-800 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 transform hover:scale-110">Detail</button>
                <button onClick={() => handleDeleteFav(favorite.id)} type="button" className="py-2 px-4 bg-transparent text-white font-semibold rounded bg-red-600 hover:bg-red-800 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 transform hover:scale-110">Delete</button>
              </div>
            </footer>

          </article>
        </div>
        ))
      )
    }
    </>
  )
}