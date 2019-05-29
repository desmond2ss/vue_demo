<template>
  <!--需要注意到4种鼠标监听事件-->
  <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{background: bgColor}">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
      <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
  </li>

</template>

<script>
  export default {
    props: {
      todo: Object,
      index: Number,
      deleteTodo: Function
    },
    data () {
      return{
        bgColor: 'white',
        isShow: false
      }
    },
    methods: {
      handleEnter (isEnter) {
        if(isEnter){
          this.bgColor = '#aaa'
          this.isShow = true
        }else{
          this.bgColor = 'white'
          this.isShow = false
        }
      },

      deleteItem () {
        const {index, todo} = this
        if (window.confirm(`确认要删除${todo.title}吗？`)) {
          this.deleteTodo(index)
        }

      }
    }
  }

</script>

<style>
  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }

  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

</style>
