<template>
  <div id="app">
    <avaliacao-card/>
  </div>
</template>

<script>
import AvaliacaoCard from './components/AvaliacaoCard.vue';

export default {
  name: 'app',
  components: {
    AvaliacaoCard,
  },
};
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
