<template>
  <div class="stars">
    <star-rating
      :rating="rating"
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
};
</script>
<style lang="stylus" scoped>
  .stars
    justify-content space-around
</style>
