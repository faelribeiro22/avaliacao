<template>
  <div class="cabecalhoCard">
    <img src="../../assets/star-half.png" alt="">
    <h1 class="titulo">Avaliação do mentor</h1>
  </div>
</template>

<script>

export default {
  name: 'app',
};
</script>
<style lang="stylus" scoped>
  .titulo
    font-size 20px
    font-weight bold
    font-style normal
    font-stretch normal
    line-height normal
    letter-spacing -0.3px
    color #757575
    margin-left 10px
  .cabecalhoCard
    display flex
    justify-content flex-start
    height 64px
    box-shadow inset 0 -1px 0 0 #eeeeee
    max-width 1040px
</style>
