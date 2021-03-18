
<template>
  <section class="review-list">
    <h2>{{titleStr}}</h2>
    <review-preview
      v-for="review in reviews"
      :review="review"
      :key="review._id"
      @deleteReview="onDeleteReview"
    />
  </section>
</template>


<script>
import ReviewPreview from "./ReviewPreview.vue";
export default {
  props: {
    reviews: Array,
  },
  components: {
    ReviewPreview,
  },
  data() {
    return {
      titleStr: "",
    };
  },
  created() {
    if (this.reviews) this.titleStr = "Book Review:";
    else this.titleStr = "This book dont have reviews";
  },
  methods: {
    onDeleteReview(reviewId) {
      console.log("here remove", reviewId);
      this.$emit("deleteReview", reviewId);
    },
  },
};
</script>