<template>
<div>
  <h2 v-if="onePase">请输入用户名搜索</h2>
  <h2 v-if="twoPase"><img src="../assets/one-by-one.gif" style="width: 100px;height: 100px"/>Loading...</h2>
  <h2 v-if="errorMsg">{{errorMsg}}</h2>
  <div class="row">
    <div class="card" v-for="(user,index) in users" :key="index">
      <!--<a href="https://github.com/reactjs" target="_blank">-->
      <!--<img src="https://avatars.githubusercontent.com/u/6412038?v=3" style='width: 100px'/>-->
      <!--</a>-->
      <!--<p class="card-text">reactjs</p>-->
      <a :href="user.url">
        <img :src="user.avatar_url" style='width: 100px'/>
      </a>
      <p class="card-text">{{user.name}}</p>
    </div>
  </div>
</div>

</template>

<script>
  import PubSub from 'pubsub-js'
  import axios from 'axios'
  export default {
    data () {
      return {
        onePase: true,
        twoPase: false,
        users: null,
        errorMsg: ''
      }
    },
    mounted () {
      // 接受订阅消息
      PubSub.subscribe('search',(msg, saerchName) =>{
        // 变更显示状态
        this.onePase = false
        this.twoPase = true
        this.users = null
        this.errorMsg = ''
        const url = `https://api.github.com/search/users?q=${saerchName}`
        axios.get(url).then(
          response => {
            const result = response.data
            const userData = result.items.map(item => ({
              url: item.html_url,
              avatar_url: item.avatar_url,
              name: item.login
            }))
            // 更新状态
            this.twoPase = false
            this.users = userData
          }
        ).catch(error => {
          this.twoPase = false
          this.errorMsg = '获取数据失败！'
        })
      })
    }
  }

</script>

<style>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }

</style>
