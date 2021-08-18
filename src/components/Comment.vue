<template>
  <el-card class="box-card" shadow="none">
    <template #header>
      <div class="card-header">
        <span>{{ comment.username }}</span>
      </div>
    </template>
    <div>
      {{ comment.body }}
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    comment: Object
  },
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>
.box-card {
  margin-bottom: 15px;
}
</style>
