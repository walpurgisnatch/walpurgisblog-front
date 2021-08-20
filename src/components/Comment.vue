<template>
  <el-card class="box-card" shadow="none">
    <template #header>
      <div class="card-header">
        <span>{{ comment.username }}</span>
        <el-button type="text" style="float: right" @click="deleteComment">delete</el-button>
      </div>
    </template>
    <div>
      {{ comment.body }}
    </div>
  </el-card>
</template>

<script>
import EventService from '@/services/EventService.js'

export default {
  props: {
    comment: Object
  },
  data() {
    return {
      
    }
  },
  methods: {
    deleteComment() {
      EventService.deleteComment(this.comment.id).then(() => {
        this.$emit("updateComments")
      })
    }
  }
}
</script>

<style scoped>
.box-card {
  margin-bottom: 15px;
}
</style>
