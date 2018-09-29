<template>
  <div>
    <cabecalho titleCabecalho="UNA-01-2018"/>
    <div class="container">
      <side-options/>
      <div class="container-card">
        <cabecalho-card class="cabecalho-card"/>
        <avaliacao-card/>
      </div>
    </div>
  </div>
</template>

<script>
import AvaliacaoCard from '../components/avaliacao/AvaliacaoCard.vue';
import SideOptions from '../components/steps/BarraDeProgressoEsquerda.vue';
import Cabecalho from './Cabecalho.vue';
import CabecalhoCard from '../components/avaliacao/CabecalhoCard.vue';

export default {
  name: 'app',
  components: {
    SideOptions,
    AvaliacaoCard,
    Cabecalho,
    CabecalhoCard,
  },
};
</script>
<style lang="stylus">
  .container
    display flex
  .container-card
    width 100%
  .cabecalho-card
    padding-left 20px
</style>
