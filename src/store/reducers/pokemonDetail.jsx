const initialState = {
  pokemonDetail: [],
  loading: true
}

function reducer(state = initialState, action) {
  const { type, payload } = action
  // console.log(payload, 'PAYLOAD');
  switch(type) {
    case 'POKEMONDETAIL/ADDPOKEMONDETAIL':
      return { ...state, pokemonDetail: payload }
    case 'POKEMONDETAIL/LOADING':
      return { ...state, loading: payload }
    default:
      return state
  }
}

export default reducer