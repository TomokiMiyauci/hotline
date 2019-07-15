<template>
  <v-card class="mx-auto" flat>
    <v-list three-line>
      <template v-for="(item, index) in i">
        <v-list-item :key="item.title" :to="`/rooms/${item.uuid}`">
          <v-list-item-avatar>
            <v-img :src="item.user[0].avatar" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ item.user[0].name }}</v-list-item-title>
            <v-list-item-subtitle> {{ item.message }}</v-list-item-subtitle>
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
    }
  }
}
</script>
