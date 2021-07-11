import React, { Component } from "react"
import App from './components'
import { Provider } from 'react-redux'
import store from '../store'
import counter from "./containers/counter"

export default class Counter extends Component {
  render () {
    return (
      <Provider store = { store }>
        <App />
      </Provider>
    )
  }
}




