<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    router="true"
    @select="handleSelect"
  >
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="profile">Profile</el-menu-item>
      <el-menu-item class="right-one" index="/signIn">Sign in</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "Home",
    };
  },
  methods: {
    // handleSelect(key) {
    //   this.$router.push({ name: key })
    // }
  },
};
</script>

<style scoped>
.el-menu {
  margin: 0 25% 50px !important;
}

.right-one {
  float: right !important;
}
</style>
