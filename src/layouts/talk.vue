<template>
  <v-app>
    <the-appbar />
    <v-content>
      <nuxt />
    </v-content>
    <the-messenger />
  </v-app>
</template>

<script>
import TheAppbar from '~/components/organisms/TheAppbar'
import TheMessenger from '~/components/organisms/TheMessenger'
export default {
  components: {
    TheAppbar,
    TheMessenger
  }
}
</script>

<style></style>
