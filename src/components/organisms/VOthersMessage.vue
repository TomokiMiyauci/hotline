<template>
  <div>
    <v-layout align-center py-1>
      <v-avatar>
        <v-img :src="avator.src" :alt="avator.id ? avator.id : ''" />
      </v-avatar>
      <v-chip> {{ message.context }} </v-chip>
      <span class="pl-1 overline">{{ message.timestamp | getHHMM }}</span>
    </v-layout>
  </div>
</template>

<script>
export default {
  filters: {
    getHHMM(val) {
      const _d = new Date(val.seconds * 1000)

      // const Y = _d.getFullYear()
      // const m = ('0' + (_d.getMonth() + 1)).slice(-2)
      // const d = ('0' + _d.getDate()).slice(-2)
      const H = ('0' + _d.getHours()).slice(-2)
      const i = ('0' + _d.getMinutes()).slice(-2)
      // const s = ('0' + _d.getSeconds()).slice(-2)

      return `${H}:${i}`
    }
  },
  props: {
    avator: {
      type: Object,
      default: null
    },
    message: {
      type: Object,
      default: null
    }
  }
}
</script>

<style></style>
