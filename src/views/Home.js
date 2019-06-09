import React from 'react';
import * as userActions from './../actions/userActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import Header from './../components/Header';
import PokemonCard from './../components/PokemonCard';

class Home extends React.Component {

  componentDidMount() {
      let {actions} = this.props;
      actions.fetchData();
  }

  render() {

    let pokemons = this.props.user.data.map((value, index, array) => {
      return (
        <PokemonCard
          key = {index}
          avatar = {"img/pokemons/"+value.name.toLowerCase()+".jpg"}
          pokemon = {value}
        />
      )
    })

    return (
      <div className = "Home">

        <Header title = "Pokedex"/>

        <div className = "row">
          <ClipLoader
          sizeUnit={"px"}
          size={70}
          color={'#123abc'}
          loading={this.props.user.loading}
        />
          {pokemons}
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

  export default connect(mapStateToProps, mapDispatchToProps)(Home);
