<template>
  <div>
    <article class="review-preview" v-if="review">
      <small class="muted">{{new Date(review.datePicker).toLocaleDateString('it-IT')}}</small>
      <p>By: {{review.fullName}}</p>
        <star-rating
        read-only
        :increment="0.5"
        :star-size="18"
        :rating="review.rate"
        text-class="rating-txt"
      />
      <!-- <p>{{review.rate.join('')}}</p> -->
      <h1>{{review.review}}</h1>
      <button @click="$emit('deleteReview',review._id)">x</button>
    </article>
  </div>
</template>

<script>
 import StarRating from 'vue-star-rating'
export default {
  props: {
    review: Object,
  },
   components: {
    StarRating,
  },
};
</script>