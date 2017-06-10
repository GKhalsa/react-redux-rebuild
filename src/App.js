import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';


class App extends Component {
  add(){
    this.props.dispatch({type: "INCREASE_COUNTER"});
  }

  subtract(){
    this.props.dispatch({type: "DECREASE_COUNTER"});
  }

  render() {
    return (
      <div>
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
          <div>{this.props.count}</div>
          <button onClick={this.add.bind(this)}>add 1</button>
          <button onClick={this.subtract.bind(this)}>subtract 1</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    count: state.changeCounter
  }
}

export default connect(mapStateToProps)(App);
