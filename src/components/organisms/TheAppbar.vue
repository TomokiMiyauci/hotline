<template>
  <v-app-bar color="red" dark app>
    <v-app-bar-nav-icon />

    <v-toolbar-title>{{ title }}</v-toolbar-title>

    <v-spacer />
    <v-btn icon @click="LOGIN(1)">
      <v-icon>exit_to_app</v-icon>
    </v-btn>
    <v-btn icon @click="LOGOUT()">
      <v-icon>exit_to_app</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      title: 'Hotline'
    }
  },
  methods: {
    ...mapMutations('user', ['LOGIN', 'LOGOUT'])
  }
}
</script>
