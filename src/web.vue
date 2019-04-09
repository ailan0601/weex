<template>
  <div class="content">
    <web class="web" ref="myweb" :src="src" @pagestart="start" @pagefinish="finish" @error="error"></web>
    <div @click="pre">
      <text class="btn">上一页</text>
    </div>
    <div @click="reload">
      <text class="btn">刷新</text>
    </div>
    <div @click="next">
      <text class="btn">下一页</text>
    </div>
    <a href="../dist/index.js">
      <text>跳转到打包了</text>
    </a>
  </div>
</template>
<script>
const webview = weex.requireModule('webview')
export default {
  data () {
    return {
      src: 'https://www.58pic.com/'

    }
  },
  methods: {
    start (e) {
      console.log('start')
    },
    finish (e) {
      console.log('finish')
    },
    error (e) {
      console.log('error')
    },
    pre: function (e) {
      webview.goBack(this.$refs.myweb)
    },
    reload: function (e) {
      webview.reload(this.$refs.myweb)
    },
    next: function (e) {
      webview.goForward(this.$refs.myweb)
    }
  }
}
</script>
<style>
.content {
  width: 750px;
  height: 1000px;
}
.web {
  width: 750px;
  height: 800px;
}
.btn {
  height: 60px;
  font-size: 50px;
  color: #fff;
  display: inline-block;
  width: 180px;
  text-align: center;
  background-color: red;
  margin: 10px;
}
</style>