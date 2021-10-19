import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';
import 'nprogress/nprogress.css'
import markdown from './directives/markdown';
import axios from 'axios'


const app = createApp(App).use(store).use(router).use(ElementPlus)

app.directive('markdown', markdown)

app.created() {
  const userString = localStorage.getItem('user')
  if (userString) {
  const userData = JSON.parse(userString)
  this.$store.commit('SET_USER_DATA', userData)
  }
  axios.interceptors.response.use(
    response => response,
    error => {
      if (error.response.status === 401) {
        this.$store.dispatch('logout')
      }
      return Promise.reject(error)
    }
  )
}

app.mount('#app')