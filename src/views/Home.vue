<template>
  <div class="home">
    <h1 class="title">Blog</h1>
    <el-row :gutter="20">
      <el-col :offset="4" :span="12">
        <ArticleCard
          v-for="article in articles"
          :key="article.id"
          :article="article"
          @updateArticles="fetchArticles"
        />
      </el-col>
      <el-col :span="6">
        <div class="v1">
          <div style="margin-left: 25px">
          <a class="tag" href="#">All</a>
          <a class="tag" href="#">News</a>
          <a class="tag" href="#">Articles</a>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ArticleCard from "@/components/ArticleCard.vue";
import EventService from "@/services/EventService.js";

export default {
  name: "Home",
  components: {
    ArticleCard,
  },
  data() {
    return {
      articles: [],
    };
  },
  methods: {
    fetchArticles() {
      EventService.getArticles()
        .then((response) => {
          this.articles = response.data;
        })
        .catch((error) => {
          console.log("There was an error: " + error.response);
        });
    },
  },
  created() {
    this.fetchArticles();
  },
};
</script>

<style scoped lang="scss">
.title {
  text-align: center;
  margin-bottom: 50px;
}

.v1 {
  border-left: 2px solid #dfdfdf;
  height: 500px;
}

.tag {
  color: #909399;
  text-decoration: none;

  display: block;
  margin-bottom: 15px;

  &:hover {
    color: black;
  }
}
</style>
