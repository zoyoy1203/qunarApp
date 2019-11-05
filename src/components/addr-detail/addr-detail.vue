<template>
  <div class="container">
    <div class="top">
      <back-head class="header"></back-head>
      <img :src="addrDetail.imgbg" alt="">
      <div class="title">{{addrDetail.title}}</div>
      <div class="desc">
        <div class="desc_l">
          <div class="desc_ll">
            <div class="score">
              {{baseinfo.score}}
              <span>{{baseinfo.desc}}</span>
            </div>
            <div class="num">
              <span>{{baseinfo.comment_num}}</span>
              <span>{{baseinfo.raiders_num}}</span>
            </div>
          </div>
          <div class="desc_lr">
            <span class="iconfont icon-youjiantou"></span>
          </div>
        </div>
        <div class="desc_r">
          <div class="desc_rl">
            <p>景点简介</p>
            <P>开放时间，贴士</P>
          </div>
          <div class="desc_rr">
            <span class="iconfont icon-youjiantou"></span>
          </div>
        </div>
      </div>
      <div class="addr">
        <span class="iconfont icon-dingwei"></span>
        {{baseinfo.address}}
        <span class="right iconfont icon-youjiantou"></span>
      </div>
    </div>
    <div class="line"></div>
    <div class="rec">
      <p>
        <span class="iconfont icon-remen"></span>
        去哪儿推荐
      </p>
      <ul>
        <li v-for="(item,index) in addrDetail.ticketRecommend" :key="index">
          <div class="item_l">
            <div class="title">{{item.title}}</div>
            <span v-for="(tag,i) in item.tags" v-if="i<=3" :key="i">{{tag}}</span>
          </div>
          <div class="item_r">
            <div class="price">￥{{item.price}}</div>
            <span>预订</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BackHead from 'base/back-head/back-head'
  import { getAddrDetail} from 'api/api'
  import { mapGetters } from 'vuex'
  export default {
    data(){
      return {
        addrDetail:[],
        baseinfo:{}
      }
    },
    components:{
      BackHead
    },
    created () {
      this._getAddrDetail()
    },
    computed:{
      ...mapGetters([
        'addrId',
      ])
    },
    methods:{
      _getAddrDetail(){
        getAddrDetail(this.addrId).then(res => {
          this.addrDetail = res.data.addrDetail[0]
          this.baseinfo = this.addrDetail.baseinfo
          console.log(this.addrDetail)
        }).catch(err => {
          console.log(err)
        })
      }
    },
    watch:{
      addrId() {
        this._getAddrDetail()
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~assets/styles/variable.styl'
  .line{
    width: 100%
    height:20px
    background: $bgColor2
  }
.container{
  .top{
    .header{
      color: #fff
    }
    img{
      width: 100%
      height:auto
    }
    .title{
      position: relative
      top: -60px
      color: #fff
      padding-left: 10px
      font-size:$icon-font-size-m
    }
    .desc{
      padding: 0 2%
      display: flex
      flex-direction :row
      border-bottom: 1px solid $bgColor2
      padding-bottom:20px
      .desc_l{
        display: flex
        flex:1
        flex-direction :row
        .desc_ll{
          flex:1
          font-size:$font-size-s
          .score{
            font-size:$font-size-m
            color: $font-color1
          }
        }
        .desc_lr{
          width:40px
          text-align :right
          padding-right: 2%
          span{
            font-size:$icon-font-size-sx
          }

        }
      }
      .desc_r{
        display: flex
        flex:1
        flex-direction :row
        .desc_rl{
          flex:1
          font-size:$font-size-s
          p:first-child{
            font-size:$font-size-m

          }
        }
        .desc_rr{
          width:40px
          text-align :right
          span{
            font-size:$icon-font-size-sx
          }

        }
      }
    }
    .addr{
      padding: 0 2%
      height: 80px
      line-height:80px
      span{
        font-size:$icon-font-size-s
      }
      .right{
        float: right
        font-size:$icon-font-size-sx
      }
    }
  }
  .rec{
    padding: 0 2%
    p{
      height:80px
      line-height:80px
      border-bottom: $bgColor2
      span{
        font-size:$icon-font-size-m
      }
    }
    ul{
      li{
        display: flex
        flex-direction :row
        height:200px
        margin-top:10px
        .item_l{
          flex:1
          .title{
            font-size: $font-size-m
            text-overflow:ellipsis
            display: -webkit-box
            -webkit-box-orient: vertical
            -webkit-line-clamp:2
            overflow: hidden
            line-height:40px
          }
          span{
            font-size:$font-size-s
            color: $font-color3
            padding:2px 3px
            margin-right:10px
            border:1px solid  $font-color3
          }
        }
        .item_r{
          width:110px
          text-align :center
          color: $font-color1
          .price{
            font-size: $font-size-lx
            height:40px
            line-height:40px
          }
          span{
            background:  $font-color1
            color: #fff
            padding: 5px 10px
            border-radius :5px
            font-size:$font-size-m
          }
        }
      }
    }
  }
}
</style>
