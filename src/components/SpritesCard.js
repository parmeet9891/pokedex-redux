import React from 'react';
import PropTypes from 'prop-types';

class SpritesCard extends React.Component {

  render() {
    return (
      <div className = "panel panel-default">
        <div className = "panel-heading">
          <h2>Sprites</h2>
        </div>
        <div className = "panel-body">
          {
            this.props.sprites ? Object.keys(this.props.sprites).map(i => this.props.sprites[i])
            .filter((sprite) => sprite !== null)
              .reverse()
              .map((sprite, index) => {
                return (
                  <div className = "col-md-3" key = {index}>
                    <img src = {sprite} alt = {this.props.name}/>
                  </div>
                )
              })
            : null
          }
        </div>
      </div>
    )
  }

}

SpritesCard.propTypes = {
  sprites: PropTypes.object,
  name: PropTypes.string
}

export default SpritesCard;
