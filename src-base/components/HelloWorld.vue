<template>
  <div>
    <p class="msg">{{msg}}</p>
  </div>
</template>

<script>
  //  与Vue对象一致
  export default {
    data() {
      return {
        msg: 'Hello Vue component!'
      }
    }
  }
</script>

<style>
  .msg {
    color: red;
    font-size: 30px;
  }
</style>
