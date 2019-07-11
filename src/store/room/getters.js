/* eslint-disable prettier/prettier */

export default {
  getRoom: state => payload =>
    state.rooms.filter(room => room.userID === payload)
}
