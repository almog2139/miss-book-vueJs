<template>
  <section class="bgc" @click.self="$emit('close')">
    <div class="book-add">
        <!-- <span class="close-modal" @click="$emit('close')">x</span> -->
      <div class="flex space-around" >
        <p>Book Name:</p>
        <input
          type="text"
          v-model="bookName"
          placeholder="Search Book To Add"
          @input="getBookFromApi"
        />
      </div>
      <ul v-if="books" class="flex column">
        <li v-for="book in books" :key="book.id">
          {{ book.volumeInfo.title }}
          <button @click="onAddBook(book)" class="add-btn">+</button>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
import bookService from "@/services/bookService.js";

export default {
  data() {
    return {
      bookName: "",
      books: null,
    };
  },
  methods: {
    async getBookFromApi() {
      this.books = await bookService.getNetworkBooks(this.bookName);
      console.log(this.books);
    },
    async onAddBook(googleBook) {
      const bookToAdd = await bookService.addGoogleBook(googleBook);
      await this.$store.dispatch({ type: "addBook", bookToAdd });
    },
  },
 
};
</script>
<style lang="scss" scoped>
.add-btn {
  border-radius: 50%;
  border: none;
}
</style>