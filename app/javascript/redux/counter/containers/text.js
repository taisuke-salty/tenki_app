import { connect } from 'react-redux'
import Text from '../components/Text'

const mapStateToProps = (state) => {
  return {
    count: state.count.count
  }
}

export default connect(
  mapStateToProps
)(Text)