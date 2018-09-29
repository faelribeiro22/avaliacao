<template>
  <div class="stars">
    <star-rating
      :rating="rating"
      @rating-selected="setRating"
      :show-rating="false"
      active-color="#fdd835"
      :border-width="8"
      border-color="#eeeeee"
      inactive-color="#fff"
      rounded-corners
      v-bind:star-size="38"/>
  </div>
</template>
<script>
import StarRating from 'vue-star-rating';

export default {
  name: 'Avaliacao',
  components: {
    StarRating,
  },
  data() {
    return {
      rating: 1,
    };
  },
  methods: {
    setRating(rating) {
      this.rating = rating;
      this.$store.commit('ADD_STAR', rating);
    },
  },
};
</script>
<style lang="stylus" scoped>
  .stars
    margin-left 30%
</style>
