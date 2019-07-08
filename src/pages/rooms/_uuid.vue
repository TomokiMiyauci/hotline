<template>
  <div>
    <v-btn color="success" text @click="click">
      text
    </v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    click() {
      alert(this.$route.params.uuid)
    }
  }
}
</script>

<style></style>
