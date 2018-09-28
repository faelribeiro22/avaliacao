<template>
  <div>
    <div>
      <img :src="fotoMentor" alt="Avatar" class="avatar">
    </div>
    <p class="texto">
      Como você avalia a participação do mentor
       <span class="nomeMentor">{{ nomeMentor }}</span> durante o ciclo
        de formação que você participou?
    </p>
  </div>
</template>
<script>
export default {
  props: {
    nomeMentor: {
      type: String,
      default: 'Tese',
    },
    fotoMentor: {
      type: String,
      default: '',
    },
  },
};
</script>
<style lang="stylus" scoped>
  .texto
    margin 27px auto 0 auto
    width 540px
    height 40px
    font-size 16px
    font-weight 500
    font-style normal
    font-stretch normal
    line-height 1.25
    letter-spacing normal
    text-align center
    color #616161
  .nomeMentor
    font-weight bold
  .avatar
    border-radius 50%
    height 96px
    width 96px
</style>
