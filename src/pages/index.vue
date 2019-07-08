<template>
  <div>
    <v-message />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import VMessage from '~/components/organisms/VMessage'
export default {
  components: {
    VMessage
  },
  created() {
    this.SET_TITLE('Talk')
  },
  methods: {
    ...mapMutations('navbar', ['SET_TITLE'])
  }
}
</script>

<style></style>
