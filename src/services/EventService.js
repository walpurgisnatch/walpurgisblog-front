
import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getArticles() {
    return apiClient.get('/api/articles')
  },
  getArticle(id) {
    return apiClient.get('/api/article/' + id)
  },
  createArticle(article) {
    return apiClient.post('/api/articles', article)
  }
}