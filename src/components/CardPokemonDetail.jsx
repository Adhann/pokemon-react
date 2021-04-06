import React from 'react'
import loader from '../loader.gif'

export default function CardPokemonDetail(props) {
  // console.log(props, '<< PROPS');
  const { pokemonDetail, loading } = props

  return (
    <>
    { 
      loading ? (
        <div className="max-w-3xl bg-white rounded-md tracking-wide shadow-lg animate-pulse">
          <div id="header" className="flex overflow-hidden rounded-md"> 
            
            <div className="h-60 w-full bg-gray-900 overflow-hidden">
              <img alt={loader} className="block h-64" src={loader}/>
            </div>
            <div className="flex flex-col p-5">
              <div className="mb-2 h-5 w-80 bg-gray-200 overflow-hidden rounded-full"></div>
              <div className="mb-2 h-5 w-10 bg-gray-200 overflow-hidden rounded-full"></div>
              <div className="mb-2 h-5 w-28 bg-gray-200 overflow-hidden rounded-full mt-10"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" bg-white rounded-md tracking-wide shadow-lg">
          <div className="flex overflow-hidden rounded-md">
            <img alt={pokemonDetail.name} className="w-full p-4 bg-gray-800 text-white" src={pokemonDetail.sprites.other.dream_world.front_default} />
            <div className="flex flex-col p-5">
                <h4 className="text-xl font-semibold mb-2 uppercase">{pokemonDetail.name}</h4>
                <div className="flex flex-col mt-3 w-80 bg-indigo-400 rounded-lg text-white px-4 py-2 font-bold">
                  <div className="flex">
                    <div>
                      <p className="capitalize">Height</p>
                      <p className="capitalize text-gray-900">{pokemonDetail.height}</p>
                    </div>
                    <div className="pl-32">
                      <p className="capitalize">Category</p>
                      <p className="capitalize text-gray-900">{pokemonDetail.types[0].type.name}</p>
                    </div>
                  </div>
                  <div className="flex mt-5">
                    <div>
                      <p className="capitalize">Weight</p>
                      <p className="capitalize text-gray-900">{pokemonDetail.weight}</p>
                    </div>
                    <div className="pl-32">
                      <p className="capitalize">Ability</p>
                      <p className="capitalize text-gray-900">{pokemonDetail.abilities[0].ability.name}</p>
                    </div>
                  </div>
                </div>
                <p className="text-xl font-semibold mt-5 uppercase">Type</p>
                <div className="mt-1">
                  <span className="text-xs font-semibold py-1 px-2 rounded-full bg-yellow-500 uppercase last:mr-0 mr-1 text-white w-auto">{pokemonDetail.types[0].type.name}</span>
                </div>
                
            </div>
          </div>
        </div>
      )
    }
    </>
  )
}