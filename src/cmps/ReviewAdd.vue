<template>
  <section class="bgc" @click.self="$emit('close')">
    <div class="flex justify-center review-modal">
      <span class="close-modal" @click="$emit('close')">x</span>
      <form class="flex column" @submit.prevent="onAddReview">
        <div class="flex space-around">
          <span>Name:</span>
          <input type="text" v-model="reviewToAdd.fullName" ref="elInput" id="name" />
        </div>
        <div class="flex space-between">
          <!-- <ul class="flex align-center margin-auto space-between">
            <li
              v-for="(star, index) in reviewToAdd.rate"
              :key="`star-${index}`"
              @click="changeRates(index)">  <font-awesome-icon :icon="['fa', 'star']"/></li>
          </ul> -->
               <star-rating
          :star-size="22"
          :increment="0.5"
          :show-rating="false"
          :rating="5"
          @rating-selected="onSelectRating"
         
        />
            ({{this.reviewToAdd.rate}})

          <!-- <button type="button" @click="changeRate(-1)">-</button> -->
          <!-- {{reviewToAdd.rate.join('')}} -->
          <!-- <button type="button" @click="changeRate(1)">+</button> -->
        </div>
        <textarea
          type="text"
          v-model="reviewToAdd.review"
          placeholder="What do you think of the moving book..."
        />
        <button class="save">Save</button>
      </form>
    </div>
  </section>
</template>

<script>
import bookService from "@/services/bookService.js";
import eventBus from "@/services/eventBus.service.js";
import StarIcon from 'vue-material-design-icons/Star.vue';
import StarRating from 'vue-star-rating'
export default {
  data() {
    return {
      reviewToAdd: {
        fullName: "Books Reader",
        rate: 0,
        // rate: ["✰", "✰", "✰", "✰", "✰"],
        datePicker: null,
        review: "",
      },
      book: null,
      countStarInReview: 0,
    };
  },
  mounted() {
    this.$refs.elInput.focus();
  },
  methods: {
    // changeRate(diff) {
    //   if (
    //     this.reviewToAdd.rate.length + diff < 0 ||
    //     this.reviewToAdd.rate.length + diff > 5
    //   )
    //     return;
    //   else {
    //     if (diff === -1) {
    //       this.reviewToAdd.rate.splice(0, 1);
    //     } else this.reviewToAdd.rate.push("⭐");
    //   }
    // },
     onSelectRating(rating) {
      this.reviewToAdd.rate = rating
      console.log('this.reviewToAdd.rate',this.reviewToAdd.rate);
      //  this.rateCount();
    },
    // changeRates(index) {
    //   console.log("here rate", index);
    //     if (index === 0 &&this.reviewToAdd.rate[0] === "⭐" &&this.reviewToAdd.rate[1] !== "⭐")this.reviewToAdd.rate[0] = "✰";
    //     else if(index === 0 &&this.reviewToAdd.rate[0] === "✰" )this.reviewToAdd.rate[0] = "⭐"
    //   for (let i = 0; i < 5; i++) {
    //       for (let j = 0; j <= index; j++) {
    //         console.log("else");
    //         this.reviewToAdd.rate.splice(j, 1, "⭐");
    //       }
    //     if (this.reviewToAdd.rate[i]==='⭐'&&index!==4) this.reviewToAdd.rate[i] = "✰";
    //   }
    //   this.rateCount();
    // },
    // rateCount() {
    //   let countStar = 0;
    //   this.reviewToAdd.rate.forEach((star) => {
    //     if (star === "⭐") countStar++;
    //   });
    //   this.countStarInReview = countStar;
    //   console.log("count", countStar);
    // },
    async onAddReview() {
      const review = JSON.parse(JSON.stringify(this.reviewToAdd));
      this.$emit("addReview", review);
      this.reviewToAdd = {
        fullName: "Books Reader",
        rate: 0,
        review: "",
      };
    },
  },
  async created() {
    const { id } = this.$route.params;
    this.book = await bookService.get(id);
  },
  components: {
    StarRating,
  },
};
</script>
