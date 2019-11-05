<template>
  <div class="container">
    <back-head title="城市选择" class="header"></back-head>
    <div class="navbar">
      <div class="navbar_c">
        <div class="navbar_item" @click="goDomestic" :class="cityActive ? 'active' : ''" >
          境内
        </div>
        <div class="navbar_item" @click="goForeign" :class="cityActive ? '' : 'active'">
          境外·港澳台
        </div>
      </div>
    </div>
    <div class="content_c" ref="listView">
      <city-list
        :citylists="domestic"
        v-if="cityActive"
        :letter="letter"
      ></city-list>
      <city-list
        v-else
        :citylists="foreign"
        :letter="letter"
      ></city-list>
      <alphabet
        @change="handleLetterChange"
        :shortcutList="shortcutList"
      ></alphabet>
    </div>
  </div>
</template>

<script>
  import BackHead from 'base/back-head/back-head'
  import Alphabet from 'base/alphabet/Alphabet'
  import CityList from 'components/city/CityList'
  import { getCities, } from 'api/api'
  export default {
    name: 'city',
    data(){
      return{
        domestic:[],
        foreign:[],
        cityActive:true,
        letter:''
      }
    },
    components:{
      BackHead,
      Alphabet,
      CityList
    },
    computed: {
      shortcutList () {
        if(this.cityActive){
          return this.domestic.map((group) => {
            return group.title.substr(0, 1)
          })
        }else{
          return this.foreign.map((group) => {
            return group.title.substr(0, 1)
          })
        }

      },

    },
    created() {
      this._getCities()

    },
    methods:{
      handleLetterChange(letter){
        this.letter = letter
        // console.log(letter)
      },
      goDomestic(){
        this.cityActive = true
      },
      goForeign(){
        this.cityActive = false
      },
      _getCities(){
        getCities().then(res => {
          console.log(res)
          this.domestic = res.data.cities[0].cityList.domestic
          this.foreign = res.data.cities[0].cityList.foreign
        }).catch(err => {
          console.log(err)
        })
      },


    },
  }
</script>

<style lang="stylus" scoped>
@import '~assets/styles/variable.styl'
.header{
  color: #fff
  background:$bgColor3
}
.navbar{
  margin-top:80px
  background: $bgColor3
  height:70px
  line-height:70px
  .navbar_c{
    width: 70%
    margin: 0 auto
    display: flex
    flex-direction :row
    color: #fff
    .navbar_item{
      flex:1
      text-align :center
      border:1px solid #fff
      height:50px
      line-height:50px
      &.active{
        background: #fff
        color: $font-color3
      }
    }

  }
}
.content_c{
  background: $bgColor2
  width: 100%
  height:1300px
}
</style>
