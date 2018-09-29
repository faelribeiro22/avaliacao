<template>
  <div class="comentario">
    <label for="comentario" class="labelComentario">Deixe seu comentário</label>
    <textarea
      name="comentario"
      v-model="comentario"
      id="comentario"
      cols="30"
      rows="10"
      class="textArea">
    </textarea>
  </div>
</template>
<script>

export default {
  name: 'Comentario',
  watch: {
    comentario(texto) {
      this.$store.commit('COMENTARIO', texto);
    },
  },
  data() {
    return {
      comentario: '',
    };
  },
};
</script>
<style lang="stylus" scoped>
  .labelComentario
    font-size: 13px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #9e9e9e;
  .comentario
    display flexbox
    flex-direction column
    max-width 600px
    max-height 192px
    width 100%
    height 100%
    text-align left
    border-radius 4px
    border solid 1px #eeeeee
    padding 20px
    margin-top 21px
  .textArea
    overflow-y auto
    padding-right 10px
    resize none
    width 544px
    height 110px
    border none
  .textArea::-webkit-scrollbar
    width 8px
    height 36px
  .textArea::-webkit-scrollbar-track
    background-color #ffffff
    border-radius 0px
  .textArea::-webkit-scrollbar-thumb
    background-color #eeeeee
    border-radius 5px
  .textArea::-webkit-scrollbar-corner
    background-color #0f981a
    visibility visible
</style>
