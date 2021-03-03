import React from "react"
import PropTypes from "prop-types"
class Motivation extends React.Component {
  render () {
    return (
      <React.Fragment>
        Motivation: {this.props.motivation}
      </React.Fragment>
    );
  }
}

Motivation.propTypes = {
  motivation: PropTypes.number
};
export default Motivation
