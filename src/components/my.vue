<template>
  <div>
    <div class="text"><text class="textword">个人信息展示</text></div>
    <div class="text"><text class="textword">我的信息</text></div>
    <div class="text"><text class="textword">我的购物车</text></div>
    <div class="text"><text class="textword">我的收货地址</text></div>
    <div class="text"><text class="textword">待支付</text></div>
    <div class="text"><text class="textword">我的优惠券</text></div>
  </div>
</template>
<script>
export default {
  methods: {
    jump() {
      this.$router.push('index')
    }
  }
}
</script>
<style scoped>
  .text{
    height:100px;
    width:650px;
    line-height:100px;
    text-align:left;
    padding-left:40px;
  }
</style>
