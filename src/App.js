import React from 'react';
import './App.css';
import * as userActions from './actions/userActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Display from './views/Display';

class App extends React.Component {

    componentDidMount() {
        let {actions} = this.props;
        actions.fetchData();
    }

    render() {
        return (
            <Router>
                <div>
                    <Navbar/>
                    <div className = "container">
                      <Route exact path = "/" component = {Home} />
                      <Route exact path = "/pokemon/:name" component = {Display}/>
                    </div>
                </div>
            </Router>
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

  export default connect(mapStateToProps, mapDispatchToProps)(App);
