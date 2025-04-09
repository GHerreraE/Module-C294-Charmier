import axios from 'axios'

const apiClient = axios.create({
  baseURL:
    'my-json-server.typicode.com/GHerreraE/Module-C294-Charmier/blob/main/Real%20World%20Vue%203%20API%20Composition/exercices/Real-World-Vue-3-New-Syntax-L5-start/Real-World-Vue-3-New-Syntax-L5-start/db.json',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getEvents() {
    return apiClient.get('/event')
  },
}
