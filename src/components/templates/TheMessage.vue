<template>
  <div>
    <v-message />
    <v-bottom-navigation app fixed>
      <v-flex>
        <v-post-box :room-id="this.$route.params.roomID" />
      </v-flex>
    </v-bottom-navigation>
  </div>
</template>

<script>
import VMessage from '~/components/organisms/VMessage'
import VPostBox from '~/components/organisms/VPostBox'
export default {
  components: {
    VMessage,
    VPostBox
  }
}
</script>

<style></style>
