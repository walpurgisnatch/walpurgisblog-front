<template>
  <el-card class="box-card" shadow="hover">
    <template #header>
      <div class="card-header">
        <el-button type="text" @click="handle">{{ article.title }}</el-button>
        <el-button
          v-if="user && user.role === 0"
          style="float: right"
          type="text"
          @click="deleteArticle"
          >delete</el-button
        >
        <el-button
          v-if="user && user.role === 0"
          style="float: right"
          type="text"
          @click="editArticle"
          >edit</el-button
        >
      </div>
    </template>
    <div v-markdown class="preview">
      {{ article.body }} 
    </div>
  </el-card>
</template>

<script>
import EventService from "@/services/EventService.js";
import { mapState } from "vuex";

export default {
  props: {
    article: Object,
  },
  data() {
    return {};
  },
  methods: {
    handle() {
      this.$router.push({ name: "Article", params: { id: this.article.id } });
    },
    deleteArticle() {
      EventService.deleteArticle(this.article.id).then(() => {
        this.$emit("updateArticles");
      });
    },
    editArticle() {
      this.$router.push({ name: "EditArticle", params: { id: this.article.id } });
    }
  },
  computed: mapState("user", ["user"]),
};
</script>

<style scoped>
.box-card {
  margin-bottom: 25px;
}
.preview {
  max-height: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
