import React from 'react';
import PropTypes from 'prop-types';

class PokemonType extends React.Component {
  render() {
    return (
      <span className={ 'label type type-' + this.props.name.toLowerCase() }>
        { this.props.name }
      </span>
    )
  }
}

PokemonType.propTypes = {
  name : PropTypes.string.isRequired
}

export default PokemonType;
