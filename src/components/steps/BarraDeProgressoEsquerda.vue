<template>
  <div class="sideOptions">
    <progresso />
    <card-passos
      v-for="(etapa, index) in etapasAvaliacao"
      :key="index"
      :titulo="etapa.titulo"
      :check="etapa.check"
      :selected="etapa.selected"
      :descricao="etapa.descricao || ''"/>
  </div>
</template>

<script>
import Progresso from './Progresso.vue';
import CardPassos from './CardPassos.vue';

export default {
  name: 'SideBarProgresso',
  components: {
    Progresso,
    CardPassos,
  },
  data() {
    return {
      etapasAvaliacao: [
        {
          titulo: 'evidências',
          check: true,
          selected: false,
        },
        {
          titulo: 'auto-reflexão',
          check: true,
          selected: false,
        },
        {
          titulo: 'feedback',
          check: true,
          selected: false,
        },
        {
          titulo: 'avaliação do mentor',
          check: false,
          selected: true,
          descricao: 'Avalie o trabalho realizado pelo seu mentor durante este ciclo de formação.',
        },
      ],
    };
  },
};
</script>
<style lang="stylus">
  .sideOptions
    width 240px
    height 100%
    position absolute
    background-color #f5f5f5
    box-shadow inset -1px 0 0 0 #eeeeee
</style>
