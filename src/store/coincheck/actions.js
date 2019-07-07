import { GET, GOT, GUT } from './mutation-types'
export default {
  async [GET]({ commit }) {
    const id = await this.$axios.$get('/coincheck/api/ticker')

    commit(GET, id)
  },
  async [GOT]({ commit }) {
    const id = await this.$axios.$get('/api/ticker')

    commit(GOT, id)
  },

  async [GUT]({ commit }) {
    const id = await this.$axios.$get(
      'https://api.zaif.jp/api/1/last_price/btc_jpy'
    )

    commit(GUT, id)
  }
}
