export default {
  getUser: (state) => (payload) =>
    state.users.filter((user) => user.userID === payload)
}
