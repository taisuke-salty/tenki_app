import React from "react"
import PropTypes from "prop-types"   //propで情報を渡してく→型
class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
}

// 型を決める。なくてもいける
HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
