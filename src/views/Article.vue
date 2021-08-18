<template>
  <div>
    <el-row :gutter="20">
      <el-col :offset="6" :span="12">
        <h1 class="title">title {{ $route.params.id }}</h1>
        <br />
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque harum
          facilis odio, rerum quis tempora doloribus beatae est dolores aliquam
          suscipit cupiditate. Sit illo tempora voluptas dignissimos hic quasi
          soluta.
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {

  },
};
</script>

<style scoped>
.title {
  text-align: center;
}
</style>
