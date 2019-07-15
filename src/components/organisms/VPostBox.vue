<template>
  <v-text-field
    v-model="message"
    :append-outer-icon="message ? 'mdi-send' : ''"
    :prepend-icon="icon"
    filled
    rounded
    clearable
    label="Message"
    type="text"
    @click:append-outer="sendMessage"
    @click:prepend="changeIcon"
    @click:clear="clearMessage"
  />
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'
export default {
  props: {
    roomId: {
      type: String,
      required: true
    }
  },
  data: () => ({
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
    ...mapState('user', ['user']),
    icon() {
      return this.icons[this.iconIndex]
    }
  },

  methods: {
    ...mapMutations('message', ['POST']),
    ...mapActions('room', ['POST_MESSAGE']),
    sendMessage() {
      const msg = {
        context: this.message,
        timestamp: new Date()
      }
      this.POST_MESSAGE(msg)
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
