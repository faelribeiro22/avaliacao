<template>
  <div id="app">
    <avaliacao/>
  </div>
</template>

<script>
import Avaliacao from './components/Avaliacao.vue';

export default {
  name: 'app',
  components: {
    Avaliacao,
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
body
  margin 0
</style>
