<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodos="addTodos"/>
      <TodoList :Todos="Todos" :deleteTodo="deleteTodo"/>
      <TodoFooter :deleteSelectedItem="deleteSelectedItem" :Todos="Todos" :selectAllItem="selectAllItem"/>



    </div>
    <p>测试axios数据交互<a :href="resultUrl">{{resultData}}</a></p>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader.vue'
  import TodoList from './components/TodoList.vue'
  import TodoFooter from './components/TodoFooter.vue'
  import storageUtil from './utils/storageUtil'
  import axios from 'axios'

  export default {
    components: {
      TodoHeader,
      TodoList,
      TodoFooter
    },
    data () {
      return {
        Todos: storageUtil.readStorage(),
        resultData: '',
        resultUrl: ''
      }
    },
    watch: {// 深度监视
      Todos: {
        deep: true,
        handler: storageUtil.saveStorage
      }
    },
    mounted() {
      const url = `https://api.github.com/search/repositories?q=v&sort=stars`
      axios.get(url).then(
        response => {
          const result = response.data
          const mostData = result.items[0]
          this.resultData = mostData.name
          this.resultUrl = mostData.html_url
          console.log(this.resultUrl)
        }

      )
    },
    methods: {
      addTodos (todo) {
        this.Todos.unshift(todo)
      },
      deleteTodo (index) {
        this.Todos.splice(index,1)
      },
      // 删除已选的Item
      deleteSelectedItem () {
        this.Todos = this.Todos.filter(todo => !todo.complete)
      },

      // 全选/全不选Item
      selectAllItem (check) {
        this.Todos.forEach(todo => todo.complete = check)
      }
    }
  }

</script>

<style>
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
