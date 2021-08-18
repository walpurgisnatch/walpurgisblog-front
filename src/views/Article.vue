<template>
  <div>
    <el-row :gutter="20">
      <el-col :offset="6" :span="12">
        <h1 class="title">{{ article.title }}</h1>
        <br />
        <div>
          {{ article.body }}
        </div>
        <br />
        <hr />
        <div>{{ commentsTotal }} Comments</div>
        <br />
        <CommentForm :article="article.id"/>
        <Comment v-for="comment in article.comments" :key="comment.id" :comment="comment"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js"
import Comment from '@/components/Comment.vue'
import CommentForm from '@/components/CommentForm.vue'

export default {
  props: ['id'],
  data() {
    return {
      article: {},
      commentsTotal: 0      
    }    
  },
  components: {
    Comment,
    CommentForm
  },
  created() {
    EventService.getArticle(this.id)
    .then(response => {
      this.article = response.data
      this.commentsTotal = this.article.comments.length
    })
    .catch(error => {
      console.log('There was an error: ', error.response)
    })
  }
};
</script>

<style scoped>
.title {
  text-align: center;
}
</style>
