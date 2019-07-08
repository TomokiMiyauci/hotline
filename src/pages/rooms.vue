<template>
  <div>
    <v-bottom-navigation v-model="bottomNav" dark shift>
      <v-btn>
        <span>Video</span>
        <v-icon>ondemand_video</v-icon>
      </v-btn>

      <v-btn>
        <span>Music</span>
        <v-icon>music_note</v-icon>
      </v-btn>

      <v-btn>
        <span>Book</span>
        <v-icon>book</v-icon>
      </v-btn>

      <v-btn>
        <span>Image</span>
        <v-icon>image</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
import { mixin } from '~/mixins/navbar'
export default {
  mixins: [mixin],
  data: () => ({ title: 'Room', bottomNav: 3 })
}
</script>

<style></style>
