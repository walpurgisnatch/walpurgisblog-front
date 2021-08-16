<template>
<div>
  <el-form ref="newUser" :model="newUser" :rules="rules" label-width="120px">
    <el-form-item label="Username" prop="name">
      <el-input v-model="newUser.name"></el-input>
    </el-form-item>
    <el-form-item label="Email" prop="email">
      <el-input v-model="newUser.email"></el-input>
    </el-form-item>
    <el-form-item label="Password" prop="pass">
      <el-input v-model="newUser.pass" show-password></el-input>
    </el-form-item>
    <el-form-item label="status" prop="status">
      <el-input v-model="newUser.status"></el-input>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  data() {
    return {
      newUser: {
        name: '',
        email: '',
        password: '',
        status: ''
      },
      rules: {
        name: [
          { required: true, message: 'Username required.', trigger: 'blur' },
          { min: 2, message: 'At least 2 symbols required.', trigger: 'blur' }
        ],
        email: [
          { required: true, message: 'Email required.', trigger: 'blur' },
        ],
        password: [
          { required: true, message: 'Password required.', trigger: 'blur' },
          { min: 4, message: 'At least 4 symbols required.', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>