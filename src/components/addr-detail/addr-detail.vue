<template>
  <div class="container">
    <div class="top">
      <back-head class="header"></back-head>
      <div class="img_content">
        <img :src="addrDetail.imgbg" alt="">
        <div class="title">
          {{addrDetail.title}}
          <span class="imgs" @click="showImgs()">图片点击 <i>{{imgs.length}}</i></span>
        </div>
      </div>
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

    <div class="img-wrapper"
         @click="imgsActive = false"
         v-if="imgsActive"
    >
      <div class="slider-wrapper" ref="sliderWrapper">
        <slider>
          <div v-for="(item,index) in imgs" :key="index">
            <a href="#">
              <img class="needsclick"  :src="item">
            </a>
          </div>
        </slider>
      </div>
    </div>
  </div>
</template>

<script>
  import BackHead from 'base/back-head/back-head'
  import { getAddrDetail} from 'api/api'
  import { mapGetters } from 'vuex'
  import Slider from 'base/slider/slider'
  export default {
    data(){
      return {
        addrDetail:[],
        baseinfo:{},
        imgs:[
          'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_350x240_8e61302a.jpg',
          'http://img1.qunarzz.com/sight/p0/1909/4e/4e1afc2e1133ade7a3.img.jpg_350x240_2646c984.jpg',
          'http://img1.qunarzz.com/sight/p0/1907/ca/ca68bd95bc36bdba3.img.jpg_350x240_0d9e7931.jpg',
          'http://img1.qunarzz.com/sight/p0/1907/e4/e4a734b0c3fb9598a3.img.jpg_350x240_e0ec48d1.jpg',
          'http://img1.qunarzz.com/sight/p0/1907/cd/cdd8448b61cd6042a3.img.jpg_350x240_9bd65569.jpg',
          'http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_350x240_df8ba9f7.jpg',
          'http://img1.qunarzz.com/wugc/p180/201306/16/7f08e81624346b1693835fbb.jpg_350x240_b09a9503.jpg',
          'http://img1.qunarzz.com/wugc/p123/201211/19/a2045d091f02b25493835fbb.png_350x240_cf4cd08e.png',
          'http://img1.qunarzz.com/sight/p0/1410/e3/73da8d3e19cdc41c1932d4fcd22ec792.water.jpg_350x240_af846382.jpg',
          'http://img1.qunarzz.com/sight/p0/1410/9d/fe8109ab5df1c9c324e74284fa802e72.water.jpg_350x240_8571d9ed.jpg',
          'http://img1.qunarzz.com/wugc/p238/201306/16/d9090c728fed64eb93835fbb.jpg_350x240_afe6c0fa.jpg',
          'http://img1.qunarzz.com/sight/p0/1501/af/af47583adca3f972.water.jpg_350x240_95007698.jpg'
        ],
        imgsActive:false,
      }
    },
    components:{
      BackHead,
      Slider
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
      showImgs() {
        this.imgsActive = true;
      },
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
    .img_content{
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
        .imgs{
          font-size:$font-size-s
        }
      }
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
  .img-wrapper{
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: #000
    .slider-wrapper{
      z-index:999;
      margin-top:300px;
    }
  }
}
</style>
