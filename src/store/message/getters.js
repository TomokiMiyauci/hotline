/* eslint-disable prettier/prettier */

export default {
  getMessage: state => payload =>
    state.messages.filter(message => message.roomID === payload)
}
