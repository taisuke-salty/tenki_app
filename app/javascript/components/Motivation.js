import React from "react"
import PropTypes from "prop-types"
import NotMotivatedImg from './NotMotivatedImg'
import MotivatedImg from './MotivatedImg'

class Motivation extends React.Component {




  render () {

    let mot = this.props.condition.motivation
    let notMot = 4-mot
    console.log(mot)
    console.log(notMot)
    const motivationArea= [];
    for(let i = 1; i <= mot; i += 1 ){
      motivationArea.push(<MotivatedImg num={i} />);
    }
    for(let i = 1; i <= notMot; i += 1 ){
      motivationArea.push(<NotMotivatedImg num={i + mot}/>);
    }



    return (
      <React.Fragment>num
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
