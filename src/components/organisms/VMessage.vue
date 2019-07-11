<template>
  <div>
    <v-container fill-height>
      <v-layout column>
        <template
          v-for="(message, index) in getMessage(this.$route.params.roomID)"
        >
          <v-own-message
            v-if="message.userID && message.roomID"
            :key="index"
            :avator="avator"
            :message="message"
          />
          <v-others-message
            v-else
            :key="index"
            :avator="avator"
            :message="message"
          />
        </template>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapMutations, mapState, mapGetters } from 'vuex'
import VOwnMessage from '~/components/organisms/VOwnMessage'
import VOthersMessage from '~/components/organisms/VOthersMessage'
export default {
  components: {
    VOwnMessage,
    VOthersMessage
  },
  filters: {
    getHHMM(val) {
      return val.getHours() + ':' + val.getMinutes()
    }
  },
  data: () => ({
    avator: {
      src: 'https://vuetifyjs.com/apple-touch-icon-180x180.png',
      id: 'avatar'
    },
    message: ''
  }),

  computed: {
    ...mapState('message', ['messages']),
    ...mapGetters('message', ['getMessage']),
    ...mapState('user', ['user'])
  },
  methods: {
    ...mapMutations('message', ['GET']),
    sendMessage() {
      this.GET(this.message)
      this.resetIcon()
      this.clearMessage()
    }
  }
}
</script>
