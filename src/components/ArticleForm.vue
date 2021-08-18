<template>
  <div>
    <div class="form">
      <h2 class="title">{{ Article.title }}</h2>
      <el-form ref="Article" :model="Article" :rules="rules" label-width="120px">
        <el-form-item label="Title" prop="title">
          <el-input
            v-model="Article.title"
            placeholder="title"
          ></el-input>
        </el-form-item>
        <el-form-item label="Body" prop="body">
          <el-input
          type="textarea"
            v-model="Article.body"
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
export default {
  data() {
    return {
      Article: {
        title: "test title",
        body: "",
      },
      rules: {
        title: [
          { required: true, message: "Title required.", trigger: "blur" },
        ],
        body: [
          { required: true, message: "Body required.", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submit() {
      this.$refs["Article"].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
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
