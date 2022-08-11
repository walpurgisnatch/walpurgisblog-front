<template>
  <div>
    <h2 class="title">{{ header }}</h2>
    <textarea v-model="article.body" class="article" />
    <el-button type="primary" @click="submit">Create</el-button>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";

export default {
  props: ["previous"],
  data() {
    return {
      article: {
        title: "",
        body: "",
        attachments: null,
        user: 1,
      },
      rules: {
        body: [{ required: true, message: "Body required.", trigger: "blur" }],
      },
    };
  },
  methods: {
    setTitle() {
      this.article.title = this.header;
    },
    submit() {
      this.setTitle();
      this.article.body = this.article.body.slice(this.header.length + 1)
      EventService.createArticle(this.article)
        .then((response) => {
          if (response.status == 200) {
            this.$router.push({
              name: "Article",
              params: { id: response.data.id },
            });
          }
        })
        .catch((error) => {
          console.log("There was an error: ", error);
        });
    },
  },
  computed: {
    header: function() {
      return this.article.body.split("\n")[0];
    },
  },
  created() {
    if (this.previous) {
      this.article = this.previous;
      this.article.body = this.article.title + this.article.body;
    }
  },
};
</script>

<style scoped>
.title {
  text-align: center;
  margin-bottom: 50px;
}
.article {
  margin: 0 25px 25px;
  height: 400px;
  width: 100%;
  border: none;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);
}
.article:focus {
  border: none;
  outline: none;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
}
.form {
  width: 100%;
  border: 1px solid #dfdfdf;
  border-radius: 7px;
  padding-right: 40px;
}
</style>
