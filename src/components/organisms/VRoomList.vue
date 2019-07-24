<template>
  <v-card class="mx-auto" flat>
    <v-list three-line>
      <template v-for="(item, index) in b">
        <v-list-item :key="item.title" :to="`/rooms/${item}`">
          <v-list-item-avatar>
            <!-- <v-img :src="ac" /> -->
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ item }}</v-list-item-title>
            <v-list-item-subtitle> {{ item }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider :key="index" :inset="item.inset" />
      </template>
    </v-list>
  </v-card>
</template>
<script>
import { mapGetters, mapState } from 'vuex'
export default {
  data() {
    return {
      b: null
    }
  },
  computed: {
    ...mapGetters('room', ['getRoom']),
    ...mapGetters('message', ['getMessage']),
    ...mapGetters('user', ['getUser']),
    ...mapState('user', ['user']),
    i: function() {
      const i = this.getRoom(this.user)
      if (i.length) {
        i.forEach((value) => {
          const messages = (value.message = this.getMessage(value.uuid))
          if (messages.length) {
            console.log(messages)
            value.message = messages[messages.length - 1].text
            console.log(this.getUser('123'))
            value.user = this.getUser('123')
            console.log(value)
            // const message = messages.map(function(p) {
            //   return p.timestamp
            // })
            // console.log(message)
            // value.message = Math.max.apply(null, message)
            // value.message = messages[0].text
          }
        })
      }
      return i
    },
    av: function(value) {
      return value
    }
  },
  async created() {
    await this.click()
    console.log(this.b)
    // this.b.forEach((doc) => console.log(doc))
  },
  methods: {
    async click() {
      await this.$firestore
        .collection('users')
        .doc('CbPg7T1Ljj3PmIj2JuVV')
        .get()
        .then((doc) => (this.b = doc.data()))
        .catch((error) => console.log(error))
    }
  }
}
</script>
