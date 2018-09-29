<template>
  <div class="progressBar">
    <p>Encerrará em {{ qtdDias }} dias</p>
    <div class="meter">
      <span v-bind:style="{ width: progress + '%' }"></span>
    </div>
  </div>
</template>
<script>

export default {
  name: 'ProgressoBar',
  props: {
    qtdDias: {
      type: Number,
      default: 0,
    },
    progress: {
      type: Number,
      default: 100,
    },
  },
};
</script>
<style lang="stylus" scoped>
  .progressBar
    margin-left 20px
    margin-bottom 30px
    height 60px
    text-align left
    box-shadow inset 0 -1px 0 0 #eeeeee
    p
      font-size 14px
      font-weight 500
      line-height 1.43
      color #bdbdbd
  .meter
    height 8px
    width 200px
    position relative
    background #eeeeee
    -moz-border-radius 25px
    -webkit-border-radius 25px
    border-radius 25px
    box-shadow inset 0 -1px 1px rgba(255,255,255,0.3)
    span
      display block
      height 100%
      border-top-right-radius 8px
      border-bottom-right-radius 8px
      border-top-left-radius 20px
      border-bottom-left-radius 20px
      background-color rgb(43,194,83)
      background-image linear-gradient(
        center bottom,
        rgb(43,194,83) 37%,
        rgb(84,240,84) 69%
      )
      box-shadow
        inset 0 2px 9px  rgba(255,255,255,0.3),
        inset 0 -2px 6px rgba(0,0,0,0.4)
      position relative
      overflow hidden
</style>
