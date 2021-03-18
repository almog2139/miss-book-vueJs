<template>
  <ul class="card-continer">
    <book-preview 
      v-for="book in books"
      :book="book"
      :key="book._id"
      @removeBook="$emit('removeBook',$event)"
     
     
    />
  </ul>
</template>

<script>
import BookPreview from "@/cmps/BookPreview";
import { Carousel } from "vue-carousel";
export default {
  components: {
    Carousel,
  },
  props: {
    books:Array
  },
  methods: {
    // remove(carId) {
    //   this.$emit('remove', carId);
    // },
    // logId(carId) {
    //   console.log(carId);
    // },
  },
  components: {
    BookPreview,
  },
};
</script>
