import React from "react";
import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-green-600 flex px-10 py-3 justify-between items-center">
      <div className="flex items-center text-white">
        {/* <span className="text-2xl">Pokemon</span> */}
        <img src="https://assets.pokemon.com/assets/cms2/img/misc/gus/buttons/logo-pokemon-79x45.png" alt=""/>
      </div>
      <ul className="flex items-center">
        <li className="mx-5">
          <NavLink className="text-white hover:text-gray-900 hover:underline active" to="/">Home</NavLink>
        </li>
        <li className="mx-5">
          <NavLink className="text-white hover:text-gray-900 hover:underline" to="/favorite">Favorite</NavLink>
        </li>
      </ul>
    </nav>
  )
}