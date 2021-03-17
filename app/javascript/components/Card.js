import React from "react"
import PropTypes from "prop-types"
class Card extends React.Component {



  render () {
    const happy = {cardCls:'card-happy', emtTxt:'楽しい',emtCls:'emotion-happy' }
    const grad = {cardCls:'card-grad', emtTxt:'嬉しい',emtCls:'emotion-grad' }
    const sad = {cardCls:'card-sad', emtTxt:'悲しい',emtCls:'emotion-sad' }
    const angry = {cardCls:'card-angry', emtTxt:'怒り',emtCls:'emotion-angry' }

    const emts = [happy, grad, sad, angry]
    // const emt = emts[1]

    return (
      <React.Fragment>
            <div className={'card ' + emts[1].cardCls}>
              <div className={'card-emotion ' + emts[1].emtCls}>
                {emts[1].emtTxt}
              </div>
              <div className="card-day day-1">
                日時：{this.props.cardDate}
              </div>
              {/* reactでは改行＜br＞に特別な処理必要。今は改行を入れないようにする。 */}
              <div className="card-detail-title">詳細：</div>
              <div className="card-detail-text text-card1">
                {this.props.cardText}
              </div>
            </div>
      </React.Fragment>
    );
  }
}

Card.propTypes = {
  cardDate: PropTypes.date,
  cardText: propTypes.string
  // cardEmt: propTypes.string
};
export default Card