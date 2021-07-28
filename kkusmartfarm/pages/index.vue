<template>
  <div class="container">
    <div><nuxt-link to="/login">Go To Login</nuxt-link></div>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
export default {
  comments: { Menu },
  data() {
    return {
      message: 'Hello',
      name: 'Panuwat',
      pagename: 'This is your name',
      clickTime: 'Your Click at' + new Date(),
      cansee: 1,
    }
  },
}
</script>

<style></style>
