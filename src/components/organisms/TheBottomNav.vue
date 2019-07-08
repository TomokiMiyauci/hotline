<template>
  <v-bottom-navigation app fixed>
    <v-flex>
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
    </v-flex>
  </v-bottom-navigation>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
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
    },
    item() {
      return this.messages
    }
  },

  methods: {
    ...mapMutations('message', ['GET']),
    sendMessage() {
      const msg = {
        timestamp: new Date(),
        text: this.message,
        userID: this.user
      }
      this.GET(msg)
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
