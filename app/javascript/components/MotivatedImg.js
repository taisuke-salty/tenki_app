import React from "react"
import PropTypes from "prop-types"
class MotivatedImg extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      num: this.props.num
    }
  }

  render () {
    console.log('このモチベーション画像は' + this.state.num)
    return (
      <React.Fragment>
        < img src='/assets/motivated@2x.png' className='motivation-img'  />

      </React.Fragment>
    );
  }
}

export default MotivatedImg
