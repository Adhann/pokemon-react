export function addFavorite(payload) {
  // console.log(payload, '<<<<<<<PAYLOAD');
  return { type: 'FAVORITES/ADDFAVORITES', payload }
}

export function setPokemonDetail(payload) {
  return (dispatch) => {
    dispatch({ type: 'POKEMONDETAIL/ADDPOKEMONDETAIL', payload })
  }
}

export function fetchPokemonDetail(payload) {
  // return { type: 'FAVORITES/ADDFAVORITES', payload }
  const id = payload
  return async (dispatch) => {
    try {
      dispatch(setLoadingPokemonDetail(true))
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const data = await response.json()
      // console.log(data, '======================')
      dispatch(setPokemonDetail(data))
      dispatch(setLoadingPokemonDetail(false))
    } catch (err) {
      console.log(err, '<<< err');
    }
  }
}

export function setLoadingPokemonDetail(payload) {
  return { type: 'POKEMONDETAIL/LOADING', payload }
}