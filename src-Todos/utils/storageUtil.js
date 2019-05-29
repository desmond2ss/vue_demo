/*
localStorage
 */

const TODO_KEY = 'todo_key'
export default {
  saveStorage (value) {
    window.localStorage.setItem(TODO_KEY,JSON.stringify(value))
  },
  readStorage ()  {
    return JSON.parse(window.localStorage.getItem(TODO_KEY) || '[]')
  }
}
