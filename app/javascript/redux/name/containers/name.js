import { connect } from 'react-redux'
import Name from '../components/name'
import {
  changeName
} from '../../actions'

const mapStateToProps = (state) => {
  return {
    name: state.name.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickChangeName: () => dispatch(changeName()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Name)