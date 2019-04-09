<template>
  <div class="wrapper">
    <div class="header">
      <text class="headerword">{{header}}</text>
    </div>
    <div class="nav">
      <text
        @click="jump('index')"
        :class="[selectpath==='index'?'nav-item-selected':'nav-item-normal']"
      >主页</text>
      <text
        @click="jump('car')"
        :class="[selectpath==='car'?'nav-item-selected':'nav-item-normal']"
      >购物车</text>
      <text @click="jump('my')" :class="[selectpath==='my'?'nav-item-selected':'nav-item-normal']">我的</text>
    </div>
    <router-view class="template"></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      header: '今日上新',
      selectpath: 'index'
    }
  },
  methods: {
    jump (e) {
      switch (e) {
        case 'index': this.header = "今日上新"; break;
        case 'car': this.header = "购物车"; break;
        case 'my': this.header = "我的"; break;
      }
      this.selectpath = e;
      this.$router.push(e);
    }
  }
}
</script>
<style scoped="scoped">
.wrapper {
  width: 750px;
}
.header {
  width: 750px;
  height: 68px;
}
.headerword {
  height: 68px;
  font-size: 50px;
  border-bottom: 1px solid black;
  text-align: center;
}
.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 750px;
  height: 88px;
  position: fixed;
  bottom: 0px;
  z-index:99;
  background: white;
}
.template {
  height: 1134px;
  top: 0px;
  bottom: 88px;
  left: 0px;
  right: 0px;
}
.nav-item-selected {
  width: 250px;
  color: yellowgreen;
  text-align: center;
  height: 88px;
  line-height: 88px;
  font-size: 40px;
}
.nav-item-normal {
  width: 250px;
  color: black;
  text-align: center;
  height: 88px;
  line-height: 88px;
  font-size: 40px;
}
</style>
