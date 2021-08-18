
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
  signUp(name, email, password, status) {
    return apiClient.post('/api/signUp', name, email, password, status)
  },
  logIn(username, password) {
    return apiClient.post('/api/signIn', username, password)
  },
  logOut() {
    return apiClient.get('/api/logout')
  },
  getArticles() {
    return apiClient.get('/api/articles')
  },
  getArticle(id) {
    return apiClient.get('/api/article/' + id)
  },
  createArticle(article) {
    return apiClient.post('/api/article', article)
  },
  getComments() {
    return apiClient.get('/api/comments')
  },
  createComment(comment) {
    return apiClient.post('/api/comments', comment)
  },
  deleteComment(comment) {
    return apiClient.delete('/api/comments', comment)
  }
}