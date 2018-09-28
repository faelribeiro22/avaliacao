<template>
  <div>
    <side-options/>
    <avaliacao-card/>
  </div>
</template>

<script>
import AvaliacaoCard from '../components/avaliacao/AvaliacaoCard.vue';
import SideOptions from '../components/steps/BarraDeProgressoEsquerda.vue';

export default {
  name: 'app',
  components: {
    SideOptions,
    AvaliacaoCard,
  },
};
</script>
<style lang="stylus">
</style>
