<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8" :offset="8">
        <ArticleForm />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ArticleForm from "@/components/ArticleForm.vue";

export default {
  components: {
    ArticleForm,
  },
};
</script>

<style scoped></style>
