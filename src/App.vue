<template>
  <div id="app">
    <NavBar />
    <NotificationContainer />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import NotificationContainer from "@/components/NotificationContainer.vue";
import axios from "axios";

export default {
  components: {
    NavBar,
    NotificationContainer,
  },
  created() {
    const userString = localStorage.getItem("user");
    if (userString) {
      const userData = JSON.parse(userString);
      this.$store.dispatch('user/logIn', userData);
    }
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          this.$store.dispatch("user/logOut");
        }
        return Promise.reject(error);
      }
    );
  },
};
</script>

<style>
body {
  background-color: #fff;
}

#app {
  margin: 10% 5% 50px;
}
</style>
