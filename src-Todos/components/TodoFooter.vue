<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllCheck"/>
    </label>
    <span>
          <span>已完成{{CompleteSize}}</span> / 全部{{Todos.length}}
        </span>
    <button class="btn btn-danger" @click="deleteSelectedItem" v-show="CompleteSize>0">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    props: {
      deleteSelectedItem: Function,
      Todos: Array,
      selectAllItem: Function
    },

    methods: {},

    computed: {
      CompleteSize() {
        return this.Todos.reduce((perTotal, todo) => perTotal + (todo.complete ? 1 : 0), 0)
      },
      isAllCheck : {
        get () {
          return this.CompleteSize == this.Todos.length && this.Todos.length>0
        },
        set (value) {
          this.selectAllItem(value)
        }
      }
    }
  }

</script>

<style>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
