<template>
  <div>
    <v-btn color="success" @click="click">
      text
    </v-btn>
    {{ i }}
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  computed: {
    i: function() {
      this.$firestore
        .collection('rooms')
        .doc('sKVXoJDLxZzyQKDH8ayn')
        .onSnapshot(function(doc) {
          console.log('Current data: ', doc.data())
        })
      return 1
    }
  },
  methods: {
    ...mapActions('room', ['POST_MESSAGE']),
    click() {}
  }
}
</script>

<style></style>
