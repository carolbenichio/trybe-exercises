import React from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css'

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemons;
    return (
      <div className='pokemon'>
        <div className='texto'>
          <p>{name}</p>
          <p>{type}</p>
          <p>{`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        </div>
        <img src={image} alt={name}/>
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemons: PropTypes.shape ({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
  }).isRequired,
}

export default Pokemon;