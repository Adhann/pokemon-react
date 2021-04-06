import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import favoriteReducer from './reducers/favorite';
import pokemonDetailReducer from './reducers/pokemonDetail';
import logger from './middlewares/logger'

const rootReducer = combineReducers({
  favorites: favoriteReducer,
  pokemonDetail: pokemonDetailReducer
})

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

// console.log(store.getState(), 'ini dari store/index.jsgit');

export default store