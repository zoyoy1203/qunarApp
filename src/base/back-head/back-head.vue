<template>
  <div class="header"
  >
    <div class="left">
      <span class="iconfont icon-arrow-left" @click="prev"></span>
    </div>
    <div class="center">
      <span class="title">{{title}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'back-head',
    props: {
      title: {
        type: String,
        default:""
      },
    },
    computed:{

    },
    methods:{
      prev() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~assets/styles/variable.styl'
  .header{
    box-sizing :border-box
    position: fixed
    top: 0
    left: 0
    height:80px
    width: 100%
    border-bottom:1px solid $color-line
    z-index:100

    .left{
      display: inline-block
      width: 10%
      heihgt: auto
      float: left
      margin: 20px
      span{
        font-size:40px
        margin-right:20px
      }
    }
    .center{
      display: inline-block
      text-align :center
      width:70%
      height: 80px
      line-heihgt:80px
      .title{
        display: inline-block
        height: 80px
        line-height:80px
        font-size: $font-size-l
      }
    }
  }

</style>
