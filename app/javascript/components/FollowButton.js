import React from "react"
import PropTypes, { string } from "prop-types"
import classnames from 'classnames'

class FollowButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      relationship: props.relationship
    }
  }

  follow = () => {
    this.setState({
      loading: true
    })

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
        loading: false,
        relationship
      })
    })
  }

  unfollow = ()=> {
    this.setState({
      loading: true
    })

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
        loading: false,
        relationship: null
      })
    })

  }

  render () {
    const isFollowing = this.state.relationship !== null
    // relationshipがnull(followしていない)のときFLASE、nullでない（followしている）ときTRUE
    const className = classnames('btn', {
      'btn-danger': isFollowing,
      'btn-primary': !isFollowing
    })

    return (
      <React.Fragment>
        <button
          className={ className }
          onClick={ isFollowing ? this.unfollow: this.follow }
          disabled={ this.state.loading }
        >

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


