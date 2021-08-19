<template>
  <div>
    <div class="form">
      <el-form
        ref="comment"
        :model="comment"
        :rules="rules"
        label-width="120px"
      >
        <el-form-item label="Username" prop="name">
          <el-input
            v-model="comment.username"
            placeholder="Guest"
            input-style="width: 200px"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-input type="textarea" v-model="comment.body"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submit">Submit</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";

export default {
  props: ["article"],
  data() {
    return {
      comment: {
        username: "",
        body: "",
        article: 0,
      },
      rules: {
        body: [{ required: true, message: "Body required.", trigger: "blur" }],
      },
    };
  },
  methods: {
    submit() {
      this.$refs["comment"].validate((valid) => {
        if (valid) {
          this.comment.article = this.article;
          EventService.createComment(this.comment).then(() => {
            this.$emit("updateComments");
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
  border-radius: 3px;
  padding-top: 20px;
  padding-right: 20px;
  margin-bottom: 30px;
}
</style>
