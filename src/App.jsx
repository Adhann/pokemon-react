import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Favorite from './pages/Favorite'
import PokemonDetail from './pages/PokemonDetail'

export default function App(props) {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar/>
      <Switch>
        <Route path="/favorite">
          <Favorite />
        </Route>
        <Route path="/pokemon/:id">
          <PokemonDetail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}
