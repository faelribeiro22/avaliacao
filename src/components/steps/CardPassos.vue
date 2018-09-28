<template>
  <div>
    <span class="titlePassos">{{ titulo }}</span>
    <p>{{ descricao }}</p>
  </div>
</template>

<script>

export default {
  name: 'app',
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
    font-size 12px
    font-weight 600
    font-style normal
    font-stretch normal
    line-height normal
    letter-spacing normal
</style>
