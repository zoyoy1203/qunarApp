<template>
    <div class="container">
      <div class="top">
        <back-head></back-head>
        <img :src="hostlist.imgbg" alt="">
        <div class="cityname">{{hostlist.cityName}}</div>
        <div class="toptitle">{{hostlist.toptitle}}</div>
      </div>
      <div class="content">
        <ul>
          <li v-for="(item,index) in sightGroup"
              @click="goAddr(item.id)"
          >
            <div class="item_t">
              <div class="img">
                <img :src="item.img" alt="">
              </div>
              <div class="text">
                <div class="title">{{item.title}}</div>
                <p class="num">
                  <span>{{item.comment_num}}</span>人感兴趣
                  <span>{{item.like_num}}</span>条评论
                </p>
                <div class="price">
                  <span>
                     ￥
                     {{item.price}}
                  </span>
                  起
                </div>
              </div>
            </div>
            <div class="item_b">
              <p class="info">
                <span class="name">{{item.comment_item.name}}</span>
                <span class="date">{{item.comment_item.date}}</span>
              </p>
              <div class="text">
                {{item.comment_item.comment_text}}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import BackHead from 'base/back-head/back-head'
  import {getHostList} from 'api/api'
  import {mapGetters,mapMutations} from 'vuex'
  export default {
    name: 'HostList',
    data(){
      return {
        hostlist:[],
        sightGroup:[]
      }
    },
    components:{
      BackHead
    },
    created () {
      this._getHostList()
    },
    computed: {
      ...mapGetters([
        'city',
        'addrId'
      ])
    },
    methods:{
      goAddr(id){
        console.log(id)
        this.setAddrId(id)
        this.$router.push({
          path:'/addr'
        })
      },
      _getHostList(){
        getHostList(this.city).then(res => {
          this.hostlist = res.data.hostList[0]
          this.sightGroup = this.hostlist.sightGroup
          console.log(this.hostlist)
        }).catch(err => {
          console.log(err)
        })
      },
      ...mapMutations({
        setAddrId: 'SET_ADDRID',
      }),
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~assets/styles/variable.styl'
.container{
  .top{
    position: relative
    color: #fff
    font-size:$font-size-l
    img{
      width: 100%
      height:auto
    }
    .cityname{
      width: 100%
      position: absolute
      top:100px
      text-align :center
    }
    .toptitle{
      width: 100%
      position: absolute
      top:160px
      text-align :center
    }
  }
  .content{
    padding: 0 2%
    ul{
      display: flex
      flex-direction :column
      li{
        display: flex
        flex-direction :column
        height:auto
        border-bottom:1px solid #ccc
        margin-top:30px
        .item_t{
          display: flex
          flex-direction :row
          .img{
            img{
              width:200px
              height:200px
            }
          }
          .text{
            flex:1
            padding-left:10px
            .title{
              height: 80px
              line-height: 80px
              font-size:$font-size-l
            }
            .num{
              height:90px
              line-height:90px
              font-size:$font-size-m
              span{
                color:$font-color3
              }
            }
            .price{
              span{
                color:$font-color1
                font-size:$font-size-mx
              }
            }
          }
        }
        .item_b{
          width: 100%
          background: $bgColor4
          padding:20px 2%
          margin:20px auto
          .info{
            margin-bottom:10px
            font-size:$font-size-s
            .name{
              float: left
            }
            .date{
              float: right
            }
          }
          .text{
            width: 100%;
            height: 150px
            line-height: 50px
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
            font-size:$font-size-m
          }
        }
      }
    }
  }
}
</style>
