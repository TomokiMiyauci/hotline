import { GET_MESSAGE, CLEAR } from './mutation-types'
export default {
  [GET_MESSAGE](state, payload) {
    state.room = payload
  },
  [CLEAR](state) {
    state.room = []
  }
}
