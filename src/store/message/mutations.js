import { GET } from './mutation-types'
export default {
  [GET](state, payload) {
    state.messages.push(payload)
  }
}
