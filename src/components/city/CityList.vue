<template>
  <div class="content"  ref="wrapper" >
    <ul class="domestic">
      <li class="citylist"
          v-for="(item,index) in citylists"
          :key="index"
          :ref="item.title"
          tabindex="0"
      >
        <p>{{item.title}}</p>
        <div class="cities">
          <ul>
            <li class="city"
                v-for="(cityitem,i) in item.cities"
                @click="selectCity(cityitem)"
            >
              {{cityitem.city_name}}
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
  import Bscroll from 'better-scroll'
  import {mapGetters, mapMutations} from 'vuex'
  export default {
    name: 'citylist',
    props:{
      citylists:{
        type:Array,
        default: []
      },
      letter:{
        type:String,
        default:''
      }
    },
    mounted() {
      this.scroll = new Bscroll(this.$refs.wrapper,{
        scrollY:true,
        // click: true,
        bounce: false,
        scrollbar: true,
        preventDefault: false,
        tap: true,
        mouseWheel: true
      })
    },
    computed:{
      ...mapGetters([
        'city',

      ])
    },
    methods:{
      selectCity(cityitem){
        this.setCity(cityitem.city_name)
        this.$router.push({
          path: '/',
          name: 'home'
        })
      },
      ...mapMutations({
        setCity: 'SET_CITY',
      })
    },
    watch:{
      letter () {
        if (this.letter) {
          console.log(this.letter)
          const element = this.$refs[this.letter][0]
          element.focus()
          // this.scroll.scrollToElement(element)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~assets/styles/variable.styl'
  .content{
    background: $bgColor2
    ul{
      li.citylist{
        outline:none
        p{
          height:60px
          line-height:60px
          margin-left:20px
        }
        .cities{
          width: 100%
          display: inline-block
          background: #fff
          ul{
            li.city{
              list-style:none
              float: left;
              width: 33%
              height:80px
              line-height: 80px
              text-align :center
              border-bottom:1px solid #ccc
              border-left: 1px solid #ccc
              font-size:$font-size-mx
              &:last-child{
                border-right:1px solid #ccc
              }
              &:nth-child(3n+1){
                border-left:0
              }
            }
          }
        }
      }
    }

  }
</style>
