<template>
  <div class="cabecalho">
    <div>
      <svgicon
      icon="icon-arrow-back"
      width="24"
      height="24"
      color="#B2E7D8"
      class="svg-margin--arrow"/>
    </div>
    <div class="title">
      {{ titleCabecalho }}
    </div>
    <div>
      <svgicon
      icon="icon-local-library"
      width="24"
      height="24"
      color="#B2E7D8"
      class="svg-margin"/>
      <svgicon
      icon="icon-menu-options-vertical"
      width="24"
      height="24"
      color="#B2E7D8"
      class="svg-margin"/>
    </div>
  </div>
  </template>
<script>
import '../compiled-icons/icon-arrow-back';
import '../compiled-icons/icon-local-library';
import '../compiled-icons/icon-menu-options-vertical';

export default {
  name: 'Cabecalho',
  props: {
    titleCabecalho: {
      type: String,
      default: '',
    },
  },
};
</script>
<style lang="stylus" scoped>
  .cabecalho
    background-color #00af7e
    width 100%
    height 64px
    display flex
    justify-content space-between
    align-items center
  .title
    color #ffffff
    text-transform uppercase
  .svg-margin
    margin-right 20px
  .svg-margin--arrow
    margin-left 20px
</style>
