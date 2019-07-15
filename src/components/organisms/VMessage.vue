<template>
  <div>
    <v-container fill-height>
      <v-layout column>
        <template v-for="(message, index) in room.messages">
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
import { mapState, mapActions } from 'vuex'
import VOwnMessage from '~/components/organisms/VOwnMessage'
import VOthersMessage from '~/components/organisms/VOthersMessage'
export default {
  components: {
    VOwnMessage,
    VOthersMessage
  },

  data: () => ({
    avator: {
      src: 'https://vuetifyjs.com/apple-touch-icon-180x180.png',
      id: 'avatar'
    }
  }),
  computed: {
    ...mapState('room', ['room'])
  },
  created() {
    this.GET_MESSAGE()
  },
  methods: {
    ...mapActions('room', ['GET_MESSAGE'])
  }
}
</script>
