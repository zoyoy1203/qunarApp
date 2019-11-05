<template>
  <div class="list-shortcut">
    <ul>
      <li v-for="(item, index) in shortcutList"
          class="item"
          :key="item"
          :ref="item"
          @click="handleLetterClick"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Alphabet',
    props:{
      shortcutList:{
        type:Array,
        default:[]
      }
    },
    data () {
      return {
        touchStatus: false,
        startY: 0,
        timer: null
      }
    },
    updated () {
      this.startY = this.$refs['A'][0].offsetTop
      console.log(this.startY)
    },
    methods: {
      handleLetterClick (e) {
        this.$emit('change', e.target.innerText)
      },
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~assets/styles/variable.styl'
  .list-shortcut{
    position:fixed
    top:140px
    right:10px
    li{
      width: 30px
      height: 30px
      margin-top:18px
      color:$font-color3
    }
  }
</style>
