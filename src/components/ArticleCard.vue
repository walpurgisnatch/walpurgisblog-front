<template>
<el-card class="box-card" shadow="hover" @click="handle()">
  <template #header>
    <div class="card-header">
      <span>Test one</span>
    </div>
  </template>
  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit unde et recusandae ipsum corporis. Sequi non nostrum qui unde ad, illo aliquid minus, optio, reiciendis repellendus provident dolor vero laboriosam!</div>
</el-card>
</template>

<script>
export default {
  methods: {
    handle() {
      this.$router.push({ path: "/article/1" })
    }
  }
}
</script>

<style scoped>

</style>