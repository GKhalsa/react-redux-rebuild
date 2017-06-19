import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import {connect} from 'react-redux';
import connect from './react-redux/connect/Connect';


class App extends Component {

  addOneToCounter(){
    this.props.dispatch({type: "INCREASE_COUNTER"});

  }

  subtractOneFromCounter(){
    this.props.dispatch({type: "DECREASE_COUNTER"});
  }

  render() {
    debugger;
    // this.props.store.subscribe(() => {
    //     this.forceUpdate()
    // })
    // debugger;
    // console.log(this.props.store.getState())
    return (
      <div>
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        {/*<div>{this.props.store.getState().changeCounter}</div>*/}
        {/*<div>{this.state.count}</div>*/}
          <div>{this.props.count}</div>
          {/*000000000000*/}
          <button onClick={this.props.addOneToCounter}>add 1</button>
          <button onClick={this.subtractOneFromCounter.bind(this)}>subtract 1</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  debugger;
  // console.log(state)
  return {
    count: state.changeCounter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addOneToCounter: () => dispatch({type: "INCREASE_COUNTER"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
