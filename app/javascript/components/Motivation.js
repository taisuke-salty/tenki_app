import React from "react"
import PropTypes from "prop-types"
class Motivation extends React.Component {
  render () {
    const srcImgs = ['/assets/motivated@2x.png','/assets/not_motivated@2x.png']
    const imgArea = () =>{
      var num = 0
      switch(num){
        case 0:
          return  (
          <div className="motivation-img-area">
            < img src='/assets/not_motivated@2x.png' className='motivation-img'  />
            < img src='/assets/not_motivated@2x.png' className='motivation-img'  />
            < img src='/assets/not_motivated@2x.png' className='motivation-img'  />
            < img src='/assets/not_motivated@2x.png' className='motivation-img'  />
          </div>);
          break;

          case 1:
            return  (
            <div className="motivation-img-area">
              < img src='/assets/motivated@2x.png' className='motivation-img'  />
              < img src='/assets/not_motivated@2x.png' className='motivation-img'  />
              < img src='/assets/not_motivated@2x.png' className='motivation-img'  />
              < img src='/assets/not_motivated@2x.png' className='motivation-img'  />
            </div>);
            break;

            case 2:
              return  (
              <div className="motivation-img-area">
                < img src='/assets/motivated@2x.png' className='motivation-img'  />
                < img src='/assets/motivated@2x.png' className='motivation-img'  />
                < img src='/assets/not_motivated@2x.png' className='motivation-img'  />
                < img src='/assets/not_motivated@2x.png' className='motivation-img'  />
              </div>);
              break;

              case 3:
                return  (
                <div className="motivation-img-area">
                  < img src='/assets/motivated@2x.png' className='motivation-img'  />
                  < img src='/assets/motivated@2x.png' className='motivation-img'  />
                  < img src='/assets/motivated@2x.png' className='motivation-img'  />
                  < img src='/assets/not_motivated@2x.png' className='motivation-img'  />
                </div>);
                break;

                case 4:
                  return  (
                  <div className="motivation-img-area">
                    < img src='/assets/motivated@2x.png' className='motivation-img'  />
                    < img src='/assets/motivated@2x.png' className='motivation-img'  />
                    < img src='/assets/motivated@2x.png' className='motivation-img'  />
                    < img src='/assets/motivated@2x.png' className='motivation-img'  />
                  </div>);
                  break;
      }
    }
    return (
      <React.Fragment>
        {/* Motivation: {this.props.motivation} */}
        <div className="motivation-area">
          <p className="index-title">モチベーション</p>
            {imgArea(0)}
        </div>
      </React.Fragment>
    );
  }
}

Motivation.propTypes = {
  motivation: PropTypes.number
};
export default Motivation
