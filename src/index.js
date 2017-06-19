import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {createStore} from 'redux';
import rootReducer from './reducers/reducers';
// import {Provider} from 'react-redux'
import Provider from './react-redux/provider/Provider.js';
import PropTypes from 'prop-types';


const store = createStore(rootReducer);

// const createChild = () => {

//       class Child extends Component {
//         render() {
//           // debugger;
//
//           return <div />
//         }
//       }
//
//       Child.contextTypes = {
//         store: PropTypes.object.isRequired
//       };
//
//       // return Child;
//   // };
//   // const Child = createChild();
//
//
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();
