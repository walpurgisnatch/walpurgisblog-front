<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="16" :offset="4">
        <ArticleForm v-if='article' :previous="article" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";
import ArticleForm from "@/components/ArticleForm.vue";

export default {
  props: ["id"],
  data() {
    return {
      article: null,
    };
  },
  components: {
    ArticleForm,
  },
  beforeCreate() {
    EventService.getArticle(this.id)
      .then((response) => {
        this.article = response.data;
      })
      .catch((error) => {
        console.log("There was an error: ", error);
      });
  },
};
</script>

<style scoped></style>
