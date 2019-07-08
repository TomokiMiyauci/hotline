<template>
  <div>
    <v-message />
  </div>
</template>

<script>
import { mixin } from '~/mixins/navbar'
import VMessage from '~/components/organisms/VMessage'
export default {
  components: {
    VMessage
  },
  mixins: [mixin],
  data: () => ({
    title: 'Talk'
  })
}
</script>

<style></style>
