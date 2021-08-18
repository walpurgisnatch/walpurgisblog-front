<template>
  <div class="home">
    <h1 class="title">Walpurgisblog</h1>
    <el-row :gutter="20">
      <el-col :offset="4" :span="12">
        <ArticleCard />
      </el-col>
      <el-col :span="6">
        <div class="v1">
          <div style="margin-left: 50px">
            <div>Some stuff</div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ArticleCard from "@/components/ArticleCard.vue";

export default {
  name: "Home",
  components: {
    ArticleCard,
  },
};
</script>

<style scoped>
.title {
  text-align: center;
  margin-bottom: 50px;
}

.v1 {
  border-left: 2px solid #dfdfdf;
  height: 500px;
}
</style>
