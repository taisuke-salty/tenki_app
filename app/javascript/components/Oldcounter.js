import React from "react"
import PropTypes from "prop-types"
class Oldcounter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: props.count
    }
  }

  handleUp = () =>{
    this.setState({
      count: ++this.state.count
    })
  }
  handleDown = () =>{
    this.setState({
      count: --this.state.count
    })
  }


  render () {
    return (
      <React.Fragment>
        <div>
          <div>{ this.state.count }</div>
          <button onClick={ this.handleUp }>+</button>
          <button onClick={ this.handleDown }>-</button>
        </div>
      </React.Fragment>
    );
  }
}

Oldcounter.defaultProps ={
  count: 0
}
Oldcounter.PropTypes ={
  count: PropTypes.number
}


export default Oldcounter
