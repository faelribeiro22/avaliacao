<template>
  <div class="avaliacao">
    <form @submit.prevent="submeterAvaliacao">
      <texto-mentor nome-mentor="Chico Buarque" foto-mentor="http://images.virgula.com.br/2015/06/capap.jpg"/>
      <stars />
      <comentario/>
      <button
      class="buttonEnviar">Avaliar mentor e finalizar ciclo de formação</button>
    </form>
  </div>
</template>
<script>
import TextoMentor from './TextoMentor.vue';
import Stars from './Stars.vue';
import Comentario from './Comentario.vue';

const axios = require('axios');

export default {
  name: 'Avaliacao',
  components: {
    Stars,
    TextoMentor,
    Comentario,
  },
  methods: {
    async submeterAvaliacao() {
      if (this.$store.state.comentario === '' ||
      this.$store.state.comentario.length < 10 ||
      this.$store.state.comentario.length > 250) {
        window.alert('Preencha o campo comentário no mínimo 10 letras!');
        return false;
      }
      if (this.$store.state.stars === 0) {
        window.alert('Preencha o campo comentário no mínimo 10 letras!');
        return false;
      }
      axios({
        method: 'post',
        url: 'https://firestore.googleapis.com/v1beta1/projects/teste-dev-api/databases/%28default%29/documents/rates/',
        crossdomain: true,
        data: {
          field: {
            user_name: {
              stringValue: 'Chico Buarque',
            },
            comment: {
              stringValue: this.$store.state.comentario,
            },
            value: {
              integerValue: this.$store.state.stars,
            },
          },
        },
      }).then(() => {
        window.alert('Sucesso na requisição');
      }).catch(() => {
        window.alert('Erro na requisição');
      });
      return true;
    },
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
    cursor pointer
  .avaliacao
    margin 0 auto
    width 62%
    padding 20px
    margin-top 20px
    height 80%
    border-radius 4px
    background-color #ffffff
    box-shadow 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.2)
</style>

