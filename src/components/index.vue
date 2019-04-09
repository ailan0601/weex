<template>
  <div class="content">
    <list class="list" @loadmore='fetch' >
      <refresh class="refresh" @refresh="onrefresh" :display="refreshing?'show':'hide'">
        <text class="indicator">下拉刷新</text>
      </refresh>
      <header>
          <text class="header">标题</text>
      </header>
      <cell class="cell" v-for="n in lists" :key="n.index">
        <image class="image" :src="n.images"></image>
        <div class="panel">
          <text class="text">{{n.index}}</text>
        </div>
      </cell>
    </list>
    <div class="loadMore" v-if="loadmore">
      <text class="text">加载更多...</text>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      lists: [
        {
          index: 1,
          images: 'img/1.jpg'
        }, {
          index: 2,
          images: 'img/2.jpg'
        }, {
          index: 3,
          images: 'img/3.jpg'
        }, {
          index: 4,
          images: 'img/4.jpg'
        }, {
          index: 5,
          images: 'img/5.jpg'
        }
      ],
      loadmore: false,
      refreshing: false
    }
  },
  methods: {
    fetch(event) {
      this.loadmore = true;
      setTimeout(() => {
        const length = this.lists.length;
        for(let i = length; i < length + 4; i++) {
          let a = i + 1;
          this.lists.push({index: a + 1, images: 'img/' + a + '.jpg'})
        }
        this.loadmore = false;
      }, 800)
    },
    onrefresh(event) {
      console.log("下拉刷新");
    }
  }
}
</script>
<style scoped>
.header {
  text-align: center;
  color: black;
  background-color: white;
  font-size: 50px;
}
.list {
  height: 1030px;
  width: 750px;
}
.image{
  height:300px;
  width:710px;
  position: absolute;
  top:32px;
  left:14px;
}
.panel {
  width: 710px;
  height: 300px;
  margin-left: 16px;
  margin-top: 35px;
  margin-bottom: 20px;
  flex-direction: column;
  justify-content: center;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(162, 217, 192);
  background-color: rgba(162, 217, 192, 0.2);
}
.text {
  font-size: 40px;
  text-align: center;
  color: #41b883;
}
.loadMore {
  height: 30px;
  width: 750px;
  line-height: 30px;
  text-align: center;
}
</style>
