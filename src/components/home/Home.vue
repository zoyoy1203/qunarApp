<template>
  <div class="container">
    <home-header :cityname="this.city"></home-header>
    <div v-if="banners.length" class="slider-wrapper" ref="sliderWrapper">
      <slider>
        <div v-for="(item,index) in banners" :key="index">
          <a href="#">
            <img class="needsclick"  :src="item">
          </a>
        </div>
      </slider>
    </div>
    <div v-if="icons.length" class="slider-wrapper icons-container" ref="sliderWrapper">
      <slider :autoPlay="false">
        <div v-for="(item,index) in this.iconsPage" :key="index">
          <div class="icon" v-for="(item,i) in icons.slice(index*iconsNum,(index+1)*iconsNum)" :key="i">
            <img :src="item.img" alt="">
            <span>{{item.keyword}}</span>
          </div>
        </div>
      </slider>
    </div>
    <div class="line"></div>
    <div class="hostlist">
      <p>
        本周热门榜单
        <span @click="goHostList">全部榜单 <i class="iconfont icon-youjiantou"></i></span>
      </p>
      <div class="content">
        <div class="content_item"
             v-for="(item,index) in hostlist"
        >
          <img :src="item.img" alt="">
          <div class="content_b">
            <span class="title">{{item.title}}</span>
            <span class="price"><em>￥{{item.price}}</em>起</span>
          </div>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="likelist">
      <p>猜你喜欢</p>
      <ul >
        <li v-for="(item, index) in likelist">
          <img :src="item.img" alt="">
          <div class="content">
            <p class="title">{{item.title}}</p>
            <p class="content_c">
              <span class="score">{{item.score}}分</span>
              <span class="num">{{item.comment_num}}</span>
            </p>
            <p class="content_c">
              <span class="price"><em>￥{{item.price}}</em>起</span>
              <span class="address">{{item.address}}</span>
            </p>
            <p class="feature">
              <span>{{item.feature}}</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="weekend">
      <p>周末去哪儿</p>
      <ul>
        <li v-for="(item,index) in weekendTrip">
          <img :src="item.img" alt="">
          <div class="content">
            <p class="title">{{item.title}}</p>
            <p class="desc">{{item.desc}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import HomeHeader from 'base/header/home-header'
import Slider from 'base/slider/slider'
import { getHome, } from 'api/api'
import {mapGetters,mapMutations} from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      banners: [],
      icons: [],
      iconsNum:8,
      iconsPage:null,
      hostlist:[],
      likelist:[],
      weekendTrip:[],
    }
  },
  components: {
    HomeHeader,
    Slider
  },
  computed: {
    ...mapGetters([
      'city',
      'addrId'
    ])
  },
  created () {
    this._getHome()
  },
  mounted () {
    this._getHome()
    console.log(this.city)
  },
  methods: {
    goHostList(){
      this.$router.push({
        path:'/hostlist'
      })
    },
    ...mapMutations({
      setAddrId: 'SET_ADDRID',
    }),
    _getHome () {
      getHome(this.city).then((res) => {
        console.log(res)
        this.banners = res.data.cityDetail[0].cityDetail.banners
        this.icons = res.data.cityDetail[0].cityDetail.icons
        this.iconsPage = Math.ceil(this.icons.length/8)
        this.hostlist = res.data.cityDetail[0].cityDetail.hostList
        this.likelist = res.data.cityDetail[0].cityDetail.likeList
        this.weekendTrip = res.data.cityDetail[0].cityDetail.weekendTrip
        console.log(this.hostlist)
        // console.log(this.icons)
        // console.log(this.iconsPage)
      }).catch(err => {
        console.log(err)
      })
    },
  },
  watch:{
    city(){
      this._getHome()
      console.log('1')
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~assets/styles/variable.styl'
.container{
  .line{
    width: 100%
    height:20px
    background: $bgColor2
  }
  .slider-wrapper{
  }
  .icons-container{
    .icon{
      float: left
      width:150px
      height:200px
      margin: 10px 18px
      img{
        width: auto
        height:150px
      }
      span{
        display: inline-block
        height:50px
        line-height:50px
        text-align :center
        font-size:24px
        width: 100%
        overflow: hidden
        text-overflow :ellipsis
        white-space: nowrap
      }
    }
  }
  .hostlist{
    margin-top:12px
    p{
      height:50px
      line-height:50px
      padding:0 20px
      span{
        font-size: $font-size-s
        height: 50px
        float: right
      }
    }
    .content{
      padding-left: 2%
      height:300px
      display: flex
      overflow-y: hidden
      overflow-x: scroll
      .content_item{
        display: flex
        flex-direction:column
        margin-right:20px
        width:200px
        img{
          width:200px
          height:200px
        }
        .content_b{
          span{
            display: block
            text-align :center
            font-size: $font-size-s
            &.title{
              width: 100%
              height:50px
              line-height :50px
              font-size:$font-size-mx
              overflow :hidden
              text-overflow :ellipsis
              white-space: nowrap
            }
            &.price{
              width: 100%
            }
            em{
              color:$font-color1
            }
          }

        }

      }
    }
  }
  .likelist{
    p{
      padding-left:20px
      height:50px
      line-height:50px
    }
    ul{
      padding: 0 20px
      li{
        margin-bottom:20px
        img{
          width:300px
          height:300px
          float: left;
        }
        .content{
          width:auto
          height:300px
          display: flex
          flex-direction :column
          .title{
            font-size:$font-size-m
            margin-top:60px
          }
          .feature{
            margin-top: 20px
            span{
              background:$bgColor1
              color:$font-color2
              font-size: $font-size-s
            }
          }
          .content_c{
            font-size: $font-size-s
            .score{

            }
            .price{
              float: left
              em{
                color: $font-color1
                font-size:$font-size-lx
              }
            }
            .address{
              float: right
            }
          }
        }
      }
    }
  }
  .weekend{
    margin-top: 30px
    background: $bgColor2
    p{
      padding-left: 20px
      height:80px
      line-height:80px
    }
    ul{
      li{
        margin: 20px 0
        img{
          width: 100%
          height: 300px
        }
        .content{
          p{
            padding-left: 20px
            margin-top: 10px
            height:30px
            line-height:30px
            &.title{
              font-size:$font-size-m
            }
            &.desc{
              font-size:$font-size-s
            }
          }
        }
      }
    }

  }
}
</style>
