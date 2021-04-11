import React, { Component } from "react"
import PropTypes from "prop-types"

export default class Text extends Component {
  render () {
    return (
      <div>
        <div>カウントの2倍は{ this.props.count*2 }です。</div>
      </div>
    );
  }
}

Text.PropTypes = {
  count: PropTypes.number.isRequired,
}
