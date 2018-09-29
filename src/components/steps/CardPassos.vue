<template>
  <div v-bind:class="[ selected ? 'selected' : 'tabPassos', { 'checked': check }  ]" >
    <span class="titlePassos">{{ titulo }}</span>
    <p class="descricao" v-if="descricao != ''">{{ descricao }}</p>
    <svgicon v-if="check" icon="icon-check" width="30" height="30" color="#72BF7A" />
  </div>
</template>

<script>
import '../../compiled-icons/icon-check';

export default {
  name: 'CardPassos',
  components: {
  },
  props: {
    check: {
      type: Boolean,
      default: true,
    },
    selected: {
      type: Boolean,
      default: false,
    },
    titulo: {
      type: String,
      default: '',
    },
    descricao: {
      type: String,
      default: '',
    },
  },
};
</script>
<style lang="stylus">
  .titlePassos
    width 240px
    min-height 60px
    text-transform uppercase
    font-size 12px
    font-weight 600
    font-style normal
    font-stretch normal
    line-height normal
    letter-spacing normal
  .tabPassos
    display flex
    text-align left
    margin-left 20px
    padding 5px
    box-shadow: inset 0 -1px 0 0 #eeeeee;
  .checked
    color #4caf50
  .descricao
    font-size 14px
    line-height 18px
    color #757575
  .selected
    height 118px
    padding 20px
    background-color rgba(0, 0, 0, 0.02)
    box-shadow inset 0 -1px 0 0 #eeeeee, inset -2px 0 0 0 #00af7e
    text-align left
</style>
