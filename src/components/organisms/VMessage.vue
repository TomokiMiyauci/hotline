<template>
  <div>
    <v-container fill-height>
      <v-layout column>
        <template
          v-for="(message, index) in getMessage(this.$route.params.userID)"
        >
          <v-own-message
            v-if="message.userID"
            :key="index"
            :avator="avator"
            :message="message"
          />
          <v-others-message v-else :key="index" :avator="avator" :message="i" />
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
    message: '',
    iconIndex: 0,
    icons: [
      'mdi-emoticon',
      'mdi-emoticon-cool',
      'mdi-emoticon-dead',
      'mdi-emoticon-excited',
      'mdi-emoticon-happy',
      'mdi-emoticon-neutral',
      'mdi-emoticon-sad',
      'mdi-emoticon-tongue'
    ]
  }),

  computed: {
    ...mapState('message', ['messages']),
    ...mapGetters('message', ['getMessage']),
    icon() {
      return this.icons[this.iconIndex]
    }
  },
  methods: {
    ...mapMutations('message', ['GET']),
    sendMessage() {
      this.GET(this.message)
      this.resetIcon()
      this.clearMessage()
    },
    clearMessage() {
      this.message = ''
    },
    resetIcon() {
      this.iconIndex = 0
    },
    changeIcon() {
      this.iconIndex === this.icons.length - 1
        ? (this.iconIndex = 0)
        : this.iconIndex++
    }
  }
}
</script>
