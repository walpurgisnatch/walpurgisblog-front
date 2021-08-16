<template>
  <div id="app">
    <NavBar />
    <NotificationContainer />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import NotificationContainer from '@/components/NotificationContainer.vue'

export default {
  components: {
    NavBar,
    NotificationContainer
  }
}
</script>

<style>
  #app {
    margin: 10% 5% 50px;
  }
</style>