<template>
  <section>
    <div class="prev-book">
      <font-awesome-icon
        :icon="['fa', 'arrow-circle-left']"
        @click="getPrevBook(book._id)"
        :style="{'font-size':'30px','color':'#b939b9'}"
      />
    </div>
    <div>
      <div class="book-details" v-if="book">
        <button class="btn-close-details" @click="$router.push('/book')">X</button>
        <img class="sale-img" src="@/assets/img/sale.png" v-if="book.listPrice.isOnSale" />
        <h3>Title: {{book.title}}</h3>
        <p>Subtitle: {{book.subtitle}}</p>
        <p>{{checkPageCount}}</p>
        <img class="book-img" :src="book.thumbnail" />
        <p>Authors: {{book.authors.join(',')}}</p>
        <router-link :to="`/book/${book._id}/author`">Meet the Author</router-link>
        <transition name="fade">
          <router-view />
        </transition>
        <p>PublishedDate: {{book.publishedDate}}</p>
        <p>PageCount: {{book.pageCount}} type:{{checkPublishedDate}}</p>

        <p>Description:</p>
        <long-txt :txt="book.description" />

        <p>Categories: {{book.categories.join(',')}}</p>
        <p :class="checkPrice">
          {{book.listPrice.amount}}
          <font-awesome-icon :icon="['fa', currencySymbol]" />
        </p>
        
        <button @click="showAddReviewPage" :style="{'margin-right':'35px'}">Add Review</button>
        <button @click="showReviewsTable">Show Book Reviews</button>
        

        <transition name="fade">
          <review-add v-show="addReviewPage" @addReview="addBookReview" @close="showAddReviewPage"/>
        </transition>
        <review-table
          v-show="showReviews"
          :reviews="book.reviews"
          @deleteReview="onRemoveBookReview"
        />
      </div>
      <img class="loading-img" v-else src="@/assets/img/loading.svg" />
    </div>
    <div class="next-book">
      <font-awesome-icon
        :icon="['fa', 'arrow-circle-right']"
        @click="getNextBook(book._id)"
        :style="{'font-size':'30px','color':'#b939b9'}"
      />
    </div>
  </section>
</template>

<script>
import LongTxt from "./LongTxt";
import bookService from "@/services/bookService.js";
import ReviewAdd from "./ReviewAdd.vue";
import ReviewTable from "./ReviewTable.vue";
export default {
  data() {
    return {
      addReviewPage: false,
      showReviews: false,
    };
  },
  created() {
    this.loadBook();
  },
  methods: {
    loadBook() {
      const { id } = this.$route.params;
      setTimeout(async () => {
        this.$store.dispatch({ type: "getBookById", bookId: id });
      }, 1000);
    },

    showAddReviewPage() {
      this.addReviewPage = !this.addReviewPage;
    },
    showReviewsTable() {
      console.log("here");
      this.showReviews = !this.showReviews;
      console.log(this.showReviews);
    },
    async addBookReview(review) {
      console.log("thisss book", this.book);
      await this.$store.dispatch({
        type: "addReview",
        reviewToAdd: review,
        book: this.book,
      });
      this.loadBook();
      this.addReviewPage=false
    },
    async onRemoveBookReview(reviewId) {
      console.log('hiii');
      await this.$store.dispatch({
        type: "removeReview",
        reviewId,
        book: this.book,
      });
      this.loadBook();
    },
    async getNextBook(bookId) {
      const id = await bookService.getNextBook(bookId);

      this.$router.push(`/book/${id}`);
    },
    async getPrevBook(bookId) {
      const id = await bookService.getPrevBook(bookId);
      this.$router.push(`/book/${id}`);
    },
  },

  computed: {
    checkPageCount() {
      console.log(this.book.pageCount);
      let text;
      if (this.book.pageCount < 100) text = "Light Reading";
      else if (this.book.pageCount > 100 && this.book.pageCount < 200)
        text = "Decent Reading";
      else if (this.book.pageCount > 200) text = "Decent Reading";
      else if (this.book.pageCount > 500) text = "Long reading";
      return text;
    },
    checkPublishedDate() {
      let currYear = new Date().getFullYear();
      let year = "";
      if (currYear - this.book.publishedDate < 1) year = "New!";
      else if (currYear - this.book.publishedDate > 10) year = "Veteran Book";
      return year;
    },
    checkPrice() {
      if (this.book.listPrice.amount > 150) return "red";
      else if (this.book.listPrice.amount < 20) return "green";
    },
    currencySymbol() {
      let symbol = "";
      switch (this.book.listPrice.currencyCode) {
        case "USD":
          symbol = "dollar-sign";
          break;
        case "ILS":
          symbol = "shekel-sign";
          break;
        case "EUR":
          symbol = "euro-sign";
          break;
      }
      return symbol;
    },
    book() {
      return this.$store.getters.selectedBook;
    },
  },
  watch: {
    "$route.params.id"(newVal, oldVal) {
      if (newVal !== oldVal) this.loadBook();
    },
  },
  components: {
    LongTxt,
    ReviewAdd,
    ReviewTable,
  },
};
</script>

