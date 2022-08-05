<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    router=true
    active-text-color="black"
  >
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="/profile">Profile</el-menu-item>
      <el-menu-item class="right-one" index="/about">About</el-menu-item>
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

  },
};
</script>

<style scoped>
.el-menu {
  margin: 0 25% 50px !important;
  --el-menu-hover-bg-color: "#fff";
  --el-menu-text-color: #909399;
  --el-menu-hover-text-color: "black";
}

.right-one {
  margin: 0 0 0 auto !important; 
}
</style>
