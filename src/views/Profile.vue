<template>
  <div class="profile">
    <el-row :gutter="20">
      <el-col :span="8" :offset="8">
        <div v-if="token == null">
          <SignIn />
        </div>
        <div v-else>
          Welcome
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import SignUp from "@/components/SignUp.vue";
import SignIn from "@/components/SignIn.vue";
import { mapState } from "vuex";

export default {
  components: {
    SignIn,
    // SignUp,
  },
  computed: mapState("user", ["token"]),
};
</script>

<style scoped>
.title {
  text-align: center;
}
</style>
