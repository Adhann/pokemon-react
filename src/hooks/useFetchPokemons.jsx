import { useEffect, useState } from 'react'

export default function useFetchPokemons() {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const base_url = 'https://pokeapi.co/api/v2/pokemon?offset=120&limit=100' 

  useEffect(() => {
    setLoading(true)
    fetch(base_url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response.json()
      })
      .then((dataPokemons) => {
        // console.log(dataPokemons, '<<<');
        return dataPokemons
      })
      .then((data) => {
        // console.log(data, '<<< POKEMON LIMIT');
        let temp = []
        data.results.forEach((el, index) => {
          // fetch(`https://pokeapi.co/api/v2/pokemon/${el.name}`)
          fetch(`${el.url}`)
          .then((res) => res.json())
          .then((newData) => {
            temp.push(newData)
            if (index === data.results.length - 1) {
              setPokemons(temp)
            }
          })
        });
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false)
        }, 2000)
      })
  }, [base_url])

  return [pokemons, loading, error]
}