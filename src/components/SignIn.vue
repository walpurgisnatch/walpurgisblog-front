<template>
<div>
  <el-form ref="Login" :model="Login" :rules="rules" label-width="120px">
    <el-form-item label="Username" prop="name">
      <el-input v-model="newUser.name" placeholder="username or email"></el-input>
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input type="password" v-model="newUser.password" placeholder="password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit">Submit</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  data() {
    return {
      Login: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: 'Username required.', trigger: 'blur' }          
        ],
        password: [
          { required: true, message: 'Password required.', trigger: 'blur' }
        ]
      }      
    }
  },
  methods: {
      submit () {
        this.$refs["Login"].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
  }
}
</script>