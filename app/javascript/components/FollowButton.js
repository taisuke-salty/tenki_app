import React from "react"
import PropTypes, { string } from "prop-types"
class FollowButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      relationship: props.relationship
    }
  }

  follow = () => {
    $.ajax({
      type: 'POST', // HTTPのメソッド
      url: `/relationships`, // リクエスト先のURL
      dataType: 'json', // リクエストの種類
      contentType: 'application/json', // レスポンスの種類
      data: JSON.stringify({
        followed_id: this.props.user.id
      }),
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
      }
    }).then((response)=> {
      const relationship = response
      this.setState({
        relationship
      })
    })
  }

  unfollow = ()=> {
          {/* relationshipがnullならば文字列「Unfollow」が変える。逆は'follow'が変える */}
    $.ajax({
      type: 'DELETE', // HTTPのメソッド
      url: `/relationships`, // リクエスト先のURL
      dataType: 'json', // リクエストの種類
      contentType: 'application/json', // レスポンスの種類
      data: JSON.stringify({
        followed_id: this.props.user.id
      }),
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
      }
    }).then((response)=> {
      const relationship = response
      this.setState({
        relationship
      })
    })

  }

  render () {
    const isFollowing = this.state.relationship !== null

    return (
      <React.Fragment>
        <button onClick={ isFollowing ? this.unfollow : this.follow}>
          { isFollowing ? 'Unfollow' : 'Follow' }
          {/* isFollowingがtureならUnfollow */}

        </button>
      </React.Fragment>
    );
  }
}

FollowButton.defaultProps = {
  relationship: null
}

FollowButton.propTypes = {



  relationship: PropTypes.string
}

export default FollowButton
