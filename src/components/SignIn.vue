<template>
  <div>
    <div class="form">
      <h2 class="title">Login</h2>
      <el-form ref="Login" :model="Login" :rules="rules" label-width="120px">
        <el-form-item label="Username" prop="name">
          <el-input
            v-model="Login.name"
            placeholder="username or email"
          ></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input
            type="password"
            v-model="Login.password"
            placeholder="password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">Submit</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Login: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "Username required.", trigger: "blur" },
        ],
        password: [
          { required: true, message: "Password required.", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submit() {
      this.$refs["Login"].validate((valid) => {
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
  border: 2px solid #dfdfdf;
  border-radius: 7px;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.15);
  padding-right: 40px;
}
</style>
