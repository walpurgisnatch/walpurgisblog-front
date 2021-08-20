
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
    return apiClient.post('/api/signup', name, email, password, status)
  },
  logIn(username, password) {
    return apiClient.post('/login', username, password)
  },
  logOut() {
    return apiClient.get('/logout')
  },
  getArticles() {
    return apiClient.get('/api/articles')
  },
  getArticle(id) {
    return apiClient.get('/api/article/' + id)
  },
  createArticle(article) {
    return apiClient.post('/api/articles', article)
  },
  deleteArticle(article) {
    return apiClient.delete('/api/article/' + article)
  },
  getComments(article) {
    return apiClient.get('/api/comments/' + article)
  },
  createComment(comment) {
    return apiClient.post('/api/comments', comment)
  },
  deleteComment(comment) {
    return apiClient.delete('/api/comment/' + comment)
  }
}