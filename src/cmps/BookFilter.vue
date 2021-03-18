<template>
  <section class="book-filter">
    <input type="text" placeholder="Search By Name..." v-model="filterBy.byName" @input="filtered" />
    <input type="number" placeholder="From Price" v-model="filterBy.fromPrice" @input="filtered" />
    <input type="number" placeholder="To Price" v-model="filterBy.toPrice" @input="filtered" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      filterBy: { byName: "", fromPrice: 0, toPrice: Infinity },
    };
  },
  methods: {
    filtered() {
      this.$emit("filtered", { ...this.filterBy });
    },
  },
};
</script>