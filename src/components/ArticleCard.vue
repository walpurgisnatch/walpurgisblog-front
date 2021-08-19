<template>
  <el-card class="box-card" shadow="hover" @click="handle()">
    <template #header>
      <div class="card-header">
        <span>{{ article.title }}</span>
      </div>
    </template>
    <div>
      {{ article.body }}
    </div>
  </el-card>
</template>


<script>
export default {
  props: {
    article: Object
  },
  data() {
    return {
      
    }
  },
  methods: {
    handle() {
      this.$router.push({ name: 'Article', params: { id: this.article.id } });
    },
  },
};
</script>

<style scoped>
.box-card {
  margin-bottom: 25px;
}
</style>
