
import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://0.0.0.0:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getArticles() {
    return apiClient.get('/api/posts')
  },
  getArticle(id) {
    return apiClient.get('/api/posts/' + id)
  },
  createArticle(article) {
    return apiClient.post('/api/posts', article)
  },
  signUp(name, email, password, status) {
    return apiClient.post('/api/signUp', name, email, password, status)
  },
  logIn(username, password) {
    return apiClient.post('/api/signIn', username, password)
  },
  logOut() {
    return apiClient.get('/api/logout')
  }
}