<template>
  <div class="avaliacao">
    <texto-mentor nome-mentor="Chico Buarque" foto-mentor="http://images.virgula.com.br/2015/06/capap.jpg"/>
    <stars />
    <comentario/>
    <button class="buttonEnviar">Avaliar mentor e finalizar ciclo de formação</button>
  </div>
</template>
<script>
import TextoMentor from './TextoMentor.vue';
import Stars from './Stars.vue';
import Comentario from './Comentario.vue';

export default {
  name: 'Avaliacao',
  components: {
    Stars,
    TextoMentor,
    Comentario,
  },
};
</script>
<style lang="stylus" scoped>
  .buttonEnviar
    width 600px
    height 44px
    border-radius 3px
    border none
    background-color #00af7e
    color #ffffff
    font-size 14px
    font-weight bold
    font-style normal
    font-stretch normal
    line-height 1.43
    letter-spacing normal
    text-align center
    color #ffffff
    margin-top 39px
  .avaliacao
    margin 0 auto
    width 59%
    padding 20px
    margin-top 20px
    height 80%
    border-radius 4px
    background-color #ffffff
    box-shadow 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.2)
</style>

