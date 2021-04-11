import React, { Component } from "react"
import PropTypes from "prop-types"

export default class Name extends Component {
  render () {
    return (
      <div>
        <div>私の名前は{ this.props.name}です</div>
        <button onClick={ this.props.onClickChangeName }>名前変更</button>
      </div>
    );
  }
}

Name.PropTypes = {
  name: PropTypes.string.isRequired,
  onClickChangeName: PropTypes.func.isRequired,
}
