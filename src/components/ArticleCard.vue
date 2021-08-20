<template>
  <el-card class="box-card" shadow="hover">
    <template #header>
      <div class="card-header">
        <el-button type="text" @click="handle">{{ article.title }}</el-button>
        <el-button style="float: right" type="text" @click="deleteArticle">delete</el-button>
      </div>
    </template>
    <div>
      {{ article.body }}
    </div>
  </el-card>
</template>


<script>
import EventService from '@/services/EventService.js'

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
    deleteArticle() {
      EventService.deleteArticle(this.article.id).then(() => {
        this.$emit("updateArticles")
      })
    }
  },
};
</script>

<style scoped>
.box-card {
  margin-bottom: 25px;
}
</style>
