import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import CardPokemonDetail from '../components/CardPokemonDetail'
import useFetchPokemonDetail from '../hooks/useFetchPokemonDetail'
import { fetchPokemonDetail, setPokemonDetail } from '../store/action'

export default function PokemonDetail() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const pokemonDetail = useSelector(state => state.pokemonDetail.pokemonDetail)
  const loading = useSelector(state => state.pokemonDetail.loading)

  useEffect(() => {
    dispatch(fetchPokemonDetail(id))
  }, [dispatch, id])

  // if(loading) return <div className="text-2xl bg-red-500">LOADING</div>

  return (
    <>
    <main className="mb-auto mx-auto lg:px-16 pt-16">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {/* <div className="bg-red-500">{JSON.stringify(pokemonDetail)}</div> */}
        <CardPokemonDetail pokemonDetail={pokemonDetail} loading={loading} />
        {/* <CardPokemonDetail pokemonDetail={pokemonDetail} /> */}
      </div>
    </main>
    </>
  )
}