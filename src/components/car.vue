<template>
  <div>
    <text class="carword">您的购物车空空如也</text>
    <text class="goShop" @click="jump">赶快去逛逛</text>
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
  .carword{
    height:58px;
    text-align: center;
  }
  .goShop{
    text-align: center
  }
</style>
