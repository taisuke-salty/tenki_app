import {
  CHANGE_NAME
} from '../constants/action_types'

const initialState = {
  name: 'no_name'
}

export default (state =initialState, action) => {
  switch(action.type) {
    case CHANGE_NAME:
      return {
        // ...：スプレッド構文
        ...state,
        name: 'スズキ'  // 同名のプロパティがある場合は置き換わる...まじかよ
      }

    default:
      return state
  }

}
