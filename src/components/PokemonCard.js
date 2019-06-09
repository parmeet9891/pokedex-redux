import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PokemonType from './PokemonType';

class PokemonCard extends React.Component {
  render() {

    let types = this.props.pokemon.type.map((value, index, array) => {
      return (
        <PokemonType
          key = {index}
          name = {value}
        />
      )
    })

    return (
      <div className = "col-md-3">
        <div className = "pokemon panel panel-primary">

          <div className = "panel-heading">
            <h2>{this.props.pokemon.name}</h2>
            <span className="pokemon-id label label-primary pull-right">#{ this.props.pokemon.id }</span>
          </div>

          <div className = "panel-body">
            <Link to = {"/pokemon/"+this.props.pokemon.name.toLowerCase()}>
              <img src = {this.props.avatar} className = "avatar center-block" alt = {this.props.pokemon.name} />
            </Link>
          </div>

          <div className = "panel-footer">
            <div className = "text-center types">
              {types}
            </div>
          </div>

        </div>
      </div>
    )
  }
}

PokemonCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  pokemon: PropTypes.object.isRequired
}

export default PokemonCard;
