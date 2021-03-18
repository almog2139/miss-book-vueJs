<template>
  <section class="book-app">
    
    <!-- <book-details :book="selectedBook" v-if="selectedBook" @closeDeatils="closeDeatils"></book-details> -->
    <book-add v-show="showAddPage" @close="onShowAddPage"/>
    <div class="flex">
    <button class="plus-btn" @click="onShowAddPage">+</button>
    <book-filter @filtered="setFilter"></book-filter>
    </div>
     <!-- <div class="flex ">
        <img class="pointer" src="@/assets/img/grid.png" alt @click="displayStyle = 'grid'" />
        <img class="pointer" src="@/assets/img/list.png" alt @click="displayStyle = 'list'" />
      </div> -->
    <book-list :books="booksToShow" @removeBook="onRemoveBook" ></book-list>
    <button class="chat-btn" @click="onShowPopUp"><ChatIcon class="chat-icon"/></button>
  
     <pop-up v-show="showPopUp" @closePopUp="onShowPopUp" >
   
      <template v-slot:header>
        <h1>Chat</h1>
     
      </template>
      <chat-app/>
      <template v-slot:footer>
        <p>Contact info</p>
      </template>
    
     </pop-up>
   
  </section>
</template>




<script>

import bookService from "@/services/bookService.js";
import BookList from "@/cmps/BookList";
import BookFilter from "@/cmps/BookFilter";
import BookDetails from "@/cmps/BookDetails";
import popUp from "@/cmps/PopUp";
import eventBus from '@/services/eventBus.service.js';
import BookAdd from "@/cmps/BookAdd.vue";
import ChatIcon from 'vue-material-design-icons/Chat.vue';

import ChatApp from '../cmps/ChatApp.vue';

export default {
  data() {
    return {
      showAddPage:false,
      filterBy: null,
     showPopUp:false
    };
  },
  methods: {
    async loadBooks() {
      await this.$store.dispatch({type:'loadBooks'})
    },
    async onRemoveBook(bookId) {
      await this.$store.dispatch({type:'removeBook',bookId})
    },
  onShowAddPage(){
    this.showAddPage=!this.showAddPage
  },
  onShowPopUp(){
    console.log('here2');
    this.showPopUp=!this.showPopUp
    console.log('this.showPOP',this.showPopUp);
  },
   

    setFilter(filterBy) {
      this.$store.commit({ type: 'setFilter', filterBy });
    },
  },
  computed: {
   booksToShow(){
     return this.$store.getters.booksToShow
   }
  },
  async created() {
    this.loadBooks();
  },
  components: {
    BookList,
    BookDetails,
    BookFilter,
    BookAdd,
    ChatIcon,
    popUp,
    ChatApp
  },
};
</script>