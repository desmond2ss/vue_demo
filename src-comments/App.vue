<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对VUE的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <!--将添加comment的方法绑定到此组件内-->
      <Add :addComment="addComment"/>
      <!--传递数据给List-->
      <List :comments='comments' :deleteComment="deleteComment"/>
    </div>
  </div>
</template>

<script>
  import Add from './components/Add.vue'
  import List from './components/List.vue'
  export default {
    components: {
      Add,
      List
    },
    // 定义添加数据的方法
    methods: {
      addComment (comment) {
        this.comments.unshift(comment)
      },
      deleteComment (index) {
        this.comments.splice(index,1)
      }

    },
    data() {
      return {
        comments:[
          {
            name: 'BOB',
            content: '好好学习1'
          },
          {
            name: 'AOB',
            content: '好好学习2'
          },
          {
            name: 'COB',
            content: '好好学习3'
          }
        ]
      }

    }
  }

</script>

<style>

</style>
