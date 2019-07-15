import { GET_MESSAGE, POST_MESSAGE, CLEAR } from './mutation-types'
export default {
  [GET_MESSAGE]({ commit, state }) {
    if (state.room.length) {
      console.log(1)
      return
    }
    commit(CLEAR)
    this.$firestore
      .collection('rooms')
      .doc('sKVXoJDLxZzyQKDH8ayn')
      .onSnapshot(function(doc) {
        commit(GET_MESSAGE, doc.data())
      })
    // .then(function(querySnapshot) {
    //   console.log(querySnapshot)
    //   querySnapshot.forEach(function(doc) {
    //     console.log(doc.id, ' => ', doc.data())
    //     commit(GET_MESSAGE, doc.data())
    //   })
    // })
    // .catch(function(error) {
    //   console.error('Error adding document: ', error)
    // })
  },
  [POST_MESSAGE](ctx, payload) {
    console.log(payload)
    this.$firestore
      .collection('rooms')
      .doc('sKVXoJDLxZzyQKDH8ayn')
      .update({
        messages: this.$firebase.firestore.FieldValue.arrayUnion(payload)
      })
      .then(function() {
        console.log('Document successfully written!')
      })
      .catch(function(error) {
        console.error('Error writing document: ', error)
      })
  }
}
