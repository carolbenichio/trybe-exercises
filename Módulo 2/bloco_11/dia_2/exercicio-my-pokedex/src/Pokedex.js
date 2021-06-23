import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';
import './Pokedex.css'

class Pokedex extends React.Component {
  render() {
    return (
      <div className='pokedex'>
        { pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemons={pokemon}/>) }
      </div>
    )
  }
}

export default Pokedex;