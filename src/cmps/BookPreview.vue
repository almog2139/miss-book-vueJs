<template>
  <section class="card-grid"   >
    <div>
      <div @click="$router.push(`/book/${book._id}`)">
        <img :src="book.thumbnail" />
      </div>
      <h1>{{book.title}}</h1>
      <h2>
        {{book.listPrice.amount}}
        <font-awesome-icon :icon="['fa', currencySymbol]" />
      </h2>
    </div>
    <div class="flex space-around align-center ">
        <!-- <md-button class="md-icon-button active-btn ">
        <delete-icon title="Remove Book"/>
      </md-button>
        <md-button class="md-icon-button active-btn">
        <book-open-icon title="Book Deatils"/>
      </md-button> -->
  
    <button @click="$emit('removeBook',book._id)" class="active-btn">Remove <font-awesome-icon :icon="['fa', 'book']" /></button>
     <button class="active-btn">
        <router-link :to="`/book/${book._id}`">Details <font-awesome-icon :icon="['fa', 'book-open']" /></router-link>
      </button>
    </div>
  </section>

</template>

<script>
// import DeleteIcon from 'vue-material-design-icons/Delete.vue';
// import BookOpenIcon from 'vue-material-design-icons/BookOpen.vue';
export default {
  name: "CardExpansion",
  props:{
    book:Object
  },
  methods: {
  },
  computed: {
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
  },
  components: {
  // DeleteIcon,
  // BookOpenIcon
}
};
</script>
