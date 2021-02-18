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
      type: 'POST', // HTTPのメソッド
      url: `/test`, // リクエスト先のURL
      dataType: 'json', // リクエストの種類
      contentType: 'application/json', // レスポンスの種類
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
      }
    }).then((response)=> {
      const relationship = response
      this.setState({
        relationship: null
      })
    })

  }

  render () {
    const isFollowing = this.state.relationship !== null
    // relationshipがnull(followしていない)のときFLASE、nullでない（followしている）ときTRUE
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
