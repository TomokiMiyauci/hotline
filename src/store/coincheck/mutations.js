import { GET, GOT, GUT } from './mutation-types'
export default {
  [GET](state, payload) {
    state.id = payload
  },
  [GOT](state, payload) {
    state.gt = payload
  },
  [GUT](state, payload) {
    state.gu = payload
  }
}
