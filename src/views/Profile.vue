<template>
  <div class="profile">
    <div v-if="user == null">
      <el-row :gutter="20">
        <el-col :span="8" :offset="8">
          <SignIn />
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8" :offset="8">
          <SignUp />
        </el-col>
      </el-row>
    </div>
    <div v-else>
      <el-row :gutter="20">
        <el-col class="v2" :span="3" :offset="4">
          <div class="avatar">
            <el-avatar shape="square" :size="150" :src="squareUrl"></el-avatar>
          </div>
          <div class="username">{{ user.name }}</div>
          <router-link :to="{ name: 'CreateArticle' }">
            <el-button type="text">Create article</el-button>
          </router-link>
          <el-button type="text" @click="logOut">LogOut</el-button>
        </el-col>
        <el-col :span="8"> </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";
import { mapState } from "vuex";

export default {
  components: {
    SignIn,
    SignUp,
  },
  data() {
    return {
      squareUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
    };
  },
  methods: {
    logOut() {
      this.$store.dispatch("user/logOut");
    },
  },
  computed: mapState("user", ["user"]),
};
</script>

<style scoped>
.title {
  text-align: center;
}
.v2 {
  border-right: 2px solid #dfdfdf;
  height: 500px;
}
.avatar {
  margin-bottom: 25px;
}
.username {
  margin-bottom: 15px;
}
</style>
