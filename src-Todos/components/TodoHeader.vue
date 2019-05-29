<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="addTodo"/>
  </div>
</template>

<script>
  export default {
    props: {
      addTodos: Function
    },
    data () {
      return {
        title: ''
      }
    },
    methods: {
      addTodo () {
        // 1.检查数据有合法性
        const title = this.title.trim()
        if(!title){
          alert("输入数据不能为空！")
          return
        }
        // 2.封装成todod对象
        const todo = {
          title: this.title,
          complete: false
        }
        // 3.将todo添加到Todos
        this.addTodos(todo)
        // 4.清除Input
        this.title = ''
      }
    }
  }

</script>

<style>
  /*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
