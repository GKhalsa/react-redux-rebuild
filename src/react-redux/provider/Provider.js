import {Component, Children} from 'react';
import PropTypes from 'prop-types'

export default class Provider extends Component {

  // getChildContext(){
  //   return {store: this.store, storeSubscription:null}
  // }

  getChildContext(){
    return {store: this.store}
  }

  constructor(props,context){
    super(props, context)
    this.store = props.store
  }

  render(){
    debugger;

    return(
      Children.only(this.props.children)
    );

  }

}

Provider.childContextTypes = {
  store: PropTypes.shape({
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired
  })

}

// import { Component, Children } from 'react'
// import PropTypes from 'prop-types'
// import { storeShape, subscriptionShape } from '../utils/PropTypes'
// // import warning from '../utils/warning'
//
// let didWarnAboutReceivingStore = false
// function warnAboutReceivingStore() {
//   if (didWarnAboutReceivingStore) {
//     return
//   }
//   didWarnAboutReceivingStore = true
//
//   // warning(
//   //   '<Provider> does not support changing `store` on the fly. ' +
//   //   'It is most likely that you see this error because you updated to ' +
//   //   'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' +
//   //   'automatically. See https://github.com/reactjs/react-redux/releases/' +
//   //   'tag/v2.0.0 for the migration instructions.'
//   // )
// }
//
// export function createProvider(storeKey = 'store', subKey) {
//     const subscriptionKey = subKey || `${storeKey}Subscription`
//
//     class Provider extends Component {
//         getChildContext() {
//           return { [storeKey]: this[storeKey], [subscriptionKey]: null }
//         }
//
//         constructor(props, context) {
//           super(props, context)
//           this[storeKey] = props.store;
//         }
//
//         render() {
//           return Children.only(this.props.children)
//         }
//     }
//
//     if (process.env.NODE_ENV !== 'production') {
//       Provider.prototype.componentWillReceiveProps = function (nextProps) {
//         if (this[storeKey] !== nextProps.store) {
//           warnAboutReceivingStore()
//         }
//       }
//     }
//
//     Provider.propTypes = {
//         store: storeShape.isRequired,
//         children: PropTypes.element.isRequired,
//     }
//     Provider.childContextTypes = {
//         [storeKey]: storeShape.isRequired,
//         [subscriptionKey]: subscriptionShape,
//     }
//     Provider.displayName = 'Provider'
//
//     return Provider
// }
//
// export default createProvider()
