<template>
  <div class="profile">
    <el-row :gutter="20">
      <el-col :span="8" :offset="8">
        <SignIn />
        <br />
        <SignUp />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SignUp from "@/components/SignUp.vue";
import SignIn from "@/components/SignIn.vue";

export default {
  components: {
    SignIn,
    SignUp,
  },
};
</script>

<style scoped>
.title {
  text-align: center;
}
</style>
