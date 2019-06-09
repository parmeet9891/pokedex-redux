import React from 'react';
import * as userActions from './../actions/userActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PokemonThumbnail from './../components/PokemonThumbnail';
import PokemonDetail from './../components/PokemonDetail.js';
import Header from './../components/Header';
import SpritesCard from './../components/SpritesCard';

class Display extends React.Component {

  componentDidMount() {
    let {actions} = this.props;
    actions.getPokemonByName(this.props.match.params.name);
  }

    render() {
      return(
        <div className = "display">
          <Header
            title = {this.props.match.params.name.toUpperCase()}
          />
          <div className = "row">

            <div className = "col-md-4">
              <PokemonThumbnail
                name = {this.props.match.params.name.toUpperCase()}
                pokemonId = {this.props.user.pokemonData.order}
                avatar = {"/img/pokemons/"+this.props.match.params.name+".jpg"}
              />
            </div>

            <div className = "col-md-8">
              <PokemonDetail
                height = {this.props.user.pokemonData.height}
                weight = {this.props.user.pokemonData.weight}
                abilities = {this.props.user.pokemonData.abilities}
                order = {this.props.user.pokemonData.order}
              />
            </div>

            <div className = "col-md-12">
              <SpritesCard
                sprites = {this.props.user.pokemonData.sprites}
                name = {this.props.match.params.name}
              />
            </div>

          </div>
        </div>
      )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Display);
