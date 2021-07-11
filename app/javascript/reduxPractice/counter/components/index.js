import React, { Component } from 'react'
import Counter from '../containers/counter'
import Text from '../containers/text'

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Counter />
        <Text />
      </React.Fragment>
    )
  }
}