<template>
  <div>
    <div class="form">
      <h2 class="title">{{ article.title }}</h2>
      <el-form
        ref="article"
        :model="article"
        :rules="rules"
        label-width="120px"
      >
        <el-form-item label="Title" prop="title">
          <el-input v-model="article.title" placeholder="title"></el-input>
        </el-form-item>
        <el-form-item label="Body" prop="body">
          <el-input
            type="textarea"
            v-model="article.body"
            placeholder="body"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">Create</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";

export default {
  data() {
    return {
      article: {
        title: "",
        body: "",
        attachments: null,
        user: 1,
      },
      rules: {
        title: [
          { required: true, message: "Title required.", trigger: "blur" },
        ],
         body: [{ required: true, message: "Body required.", trigger: "blur" }],
      },
    };
  },
  methods: {
    submit() {
      this.$refs["article"].validate((valid) => {
        if (valid) {
          EventService.createArticle(this.article)
            .then((response) => {
              if (response.status == 200) {
                this.$router.push({ name: 'Article', params: { id: response.data.id } });
              }
            })
            .catch((error) => {
              console.log("There was an error: ", error);
            });
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
.title {
  text-align: center;
  margin-bottom: 50px;
}
.form {
  border: 1px solid #dfdfdf;
  border-radius: 7px;
  padding-right: 40px;
}
</style>
