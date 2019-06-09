import React from 'react';
import PropTypes from 'prop-types';

import store from './../reducers/user';

class PokemonDetail extends React.Component {
    constructor(props) {
      super(props);
      this.store = store;
      this.state = {}
    }

    render() {
      return (
        <div className = "panel panel-default">

          <div className = "panel-heading">
            <h2>Details</h2>
          </div>

          <div className = "panel-body">

            <div className = "col-md-6">
              <h4>Height</h4>
              <p>{this.props.height/10} m</p>
              <h4>Weight</h4>
              <p>{this.props.weight/10} kg</p>
            </div>

            <div className = "col-md-6">
              <h4>Order ID</h4>
              <p>#{this.props.order}</p>
              <h4>Abilities</h4>
              {
                this.props.abilities ? this.props.abilities.map((data, index) => {
                  return <p key = {index}>{data.ability.name.toUpperCase()}</p>
                })
                : null
              }
            </div>

          </div>

        </div>
      )
    }
}

PokemonDetail.propTypes = {
  height: PropTypes.number,
  weight: PropTypes.number,
  abilities: PropTypes.array,
  order: PropTypes.number
}

export default PokemonDetail;
