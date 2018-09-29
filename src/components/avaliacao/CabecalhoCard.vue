<template>
  <div class="cabecalhoCard">
    <svgicon icon="star-half" width="24" height="24" color="#747474" />
    <h1 class="titulo">Avaliação do mentor</h1>
  </div>
</template>

<script>
import '../../compiled-icons/star-half';

export default {
  name: 'cabecalhoCard',
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
    align-items center
    height 64px
    box-shadow inset 0 -1px 0 0 #eeeeee
</style>
