import {
  COUNT_UP,
  COUNT_DOWN,
  CHANGE_NAME
} from '../constants/action_types'

export const countUp = () => {
  return {
    type: COUNT_UP
  }
}

export const countDown = () => {
  return {
    type: COUNT_DOWN
  }
}

export const changeName = () => {
  return {
    type: CHANGE_NAME
  }
}