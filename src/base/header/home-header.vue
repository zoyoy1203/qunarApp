<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont icon-arrow-left"></div>
    </div>
    <div class="header-input">
      <span class="iconfont"></span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right" @click="goCity">
      <span class="cityname">{{this.cityname}}</span>
      <span class="iconfont icon-xiajiantou"></span>
    </div>
    <!--<router-link to='/city'>-->
      <!--<div class="header-right">-->
        <!--{{this.city}}-->
        <!--<span class="iconfont arrow-icon">&#xe64a;</span>-->
      <!--</div>-->
    <!--</router-link>-->
  </div>
</template>

<script>
export default {
  name: 'home-header',
  props:{
    cityname:{
      type:String,
      default:'北京'
    }
  },
  methods:{
    goCity(){
      this.$router.push({
        path: '/city',
        name: 'city'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~assets/styles/variable.styl'
  .header
    display: flex
    height:$headerHeight
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      width:70px
      height: $headerHeight
      line-height: $headerHeight
      float: left
      .iconfont
        color: #fff
        height:100%
        font-size:$icon-font-size-m
    .header-input
      flex: 1
      background: #fff
      height: $headerInputHeight
      line-height: $headerInputHeight
      border-radius:5px
      color: #ccc
      font-size:26px
      margin: 10px auto
    .header-right
      min-width: 70px
      padding: 0 10px
      float: right
      text-align: center
      color: #fff
      .iconfont
        color: #fff
        height:100%
        font-size:$icon-font-size-m
</style>
