import React from "react"
import PropTypes from "prop-types"
import NotMotivatedImg from './NotMotivatedImg'
import MotivatedImg from './MotivatedImg'

class Motivation extends React.Component {

  // motivationArea = () => {
  //   let mot = this.props.num
  //   let notMot = 4-mot
  //   // JS Push()メソッド： https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/push



  // }



  render () {

    let mot = this.props.num
    let notMot = 4-mot
    console.log(mot)
    console.log(notMot)
    const motivationArea= [];
    for(let i = 1; i <= mot; i += 1 ){
      motivationArea.push(<MotivatedImg/>);
    }
    for(let i = 1; i <= notMot; i += 1 ){
      motivationArea.push(<NotMotivatedImg/>);
    }

    var today = new Date()
    console.log(today.getFullYear())

    return (
      <React.Fragment>
        <div className="motivation-area">
          <p className="index-title">モチベーション</p>
          {motivationArea}
        </div>
      </React.Fragment>
    );
  }
}

Motivation.propTypes = {
  motivation: PropTypes.number
};
export default Motivation
