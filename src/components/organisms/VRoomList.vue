<template>
  <v-card class="mx-auto" flat>
    <v-list three-line>
      <template v-for="(item, index) in i">
        <v-list-item :key="item.title" :to="`/rooms/${item.uuid}`">
          <v-list-item-avatar>
            <v-img :src="item.avatar" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <v-list-item-subtitle> {{ item.subtitle }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider :key="index" :inset="item.inset" />
      </template>
    </v-list>
  </v-card>
</template>
<script>
import { mapGetters, mapState } from 'vuex'
export default {
  computed: {
    ...mapGetters('room', ['getRoom']),
    ...mapState('user', ['user']),
    i: function() {
      return this.getRoom(this.user)
    }
  }
}
</script>
