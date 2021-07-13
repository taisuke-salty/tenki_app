import React from "react"
import PropTypes from "prop-types"
class Evaluation extends React.Component {
  constructor(props) {
    super(props)


    }

  render () {
    const imgs = ['/assets/happy1@2x.png','/assets/happy2@2x.png','/assets/happy3.png','/assets/happy4.png']
    // const img1 = '/assets/happy1@2x.png'
    // const img2 = '/assets/happy2@2x.png'
    // const img3 = '/assets/happy3.png'
    // const img4 = '/assets/happy4.png'
    // const evaluationImg = ()=>{
    //   switch(this.prop.evaluation){
    //     case 1:
    //       return img1
    //       break;
    //     case 2:
    //       return img2
    //       break;
    //     case 3:
    //       return img3
    //       break;
    //     case 4:
    //       return img4
    //       break;
        // default:
        //   return "";
        //   break;
      // }}

    return (
      <React.Fragment>
          <div className="evaluation-img-area" >
            <img src={imgs[this.props.num]} className="evaluation-img" />
          </div>
      </React.Fragment>
    );
  }
}

// Evaluation.PropTypes ={
//   evaluation: PropTypes.string
// }

export default Evaluation
