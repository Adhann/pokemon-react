import { useEffect, useState } from 'react'

export default function useFetchPokemonDetail(url) {
  const [pokemonDetail, setPokemonDetail] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response.json()
      })
      .then((dataPokemonDetail) => {
        // console.log(dataPokemonDetail, '<<< DETAIL');
        setPokemonDetail(dataPokemonDetail)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false)
        }, 500)
      })
  }, [url])

  return [pokemonDetail, loading, error]
}