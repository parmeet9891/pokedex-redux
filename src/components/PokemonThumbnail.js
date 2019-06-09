import React from 'react';
import PropTypes from 'prop-types';

class PokemonThumbnail extends React.Component {

  render() {
    return (
      <div className = "thumbnail has-background-gray is-height">
        <img src = {this.props.avatar} className = "img-responsive center-block" alt = {this.props.name}/>
      </div>
    )
  }

}

PokemonThumbnail.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
}

export default PokemonThumbnail;
