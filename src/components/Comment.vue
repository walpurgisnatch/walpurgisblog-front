<template>
  <el-card class="box-card" shadow="none">
    <template #header>
      <div class="card-header">
        <span>{{ comment.username }}</span>
        <el-button
          v-if="role === 0"
          style="float: right"
          type="text"
          @click="deleteComment"
          >delete</el-button
        >
      </div>
    </template>
    <div>
      {{ comment.body }}
    </div>
  </el-card>
</template>

<script>
import EventService from "@/services/EventService.js";
import { mapState } from "vuex";

export default {
  props: {
    comment: Object,
  },
  data() {
    return {};
  },
  methods: {
    deleteComment() {
      EventService.deleteComment(this.comment.id).then(() => {
        this.$emit("updateComments");
      });
    },
  },
  computed: mapState("user", ["token", "id", "username", "role"]),
};
</script>

<style scoped>
.box-card {
  margin-bottom: 15px;
}
</style>
