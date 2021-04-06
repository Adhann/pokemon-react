const initialState = {
  favorites: []
}

function reducer(state = initialState, action) {
  const { type, payload } = action
  // console.log(payload, 'PAYLOAD FAVORITE');
  switch(type) {
    case 'FAVORITES/ADDFAVORITES':
      return { ...state, favorites: [...state.favorites, payload] }
    default:
      return state
  }
}


export default reducer