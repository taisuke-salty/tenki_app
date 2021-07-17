import React from "react"
import PropTypes from "prop-types"
class Card extends React.Component {



  render () {
    const happy = {cardCls:'card-happy', emtTxt:'楽しい', emtCls:'emotion-happy' }
    const grad = {cardCls:'card-grad', emtTxt:'嬉しい', emtCls:'emotion-grad' }
    const sad = {cardCls:'card-sad', emtTxt:'悲しい', emtCls:'emotion-sad' }
    const angry = {cardCls:'card-angry', emtTxt:'怒り', emtCls:'emotion-angry' }

    const emts = [happy, grad, sad, angry]
    const emt = emts[this.props.card.feeling-1]

    console.log(emt)
    return (
      <React.Fragment>
        <div className={'card ' + emt.cardCls}>
          <div className={'card-emotion ' + emt.emtCls}>
            {emt.emtTxt}
          </div>
          <div className="card-day day-1">
            日時：{new Date(this.props.card.feel_on).toLocaleString("ja")}
          </div>
          {/* reactでは改行＜br＞に特別な処理必要。今は改行を入れないようにする。 */}
          <div className="card-detail-title">詳細：</div>
          <div className="card-detail-text text-card1">
            {this.props.card.detail}
          </div>
        </div>      </React.Fragment>
    );
  }
}

export default Card
