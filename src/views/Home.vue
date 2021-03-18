<template>
  <section class="home-book">
    <div class="content">
      <h1>Ready For Your Next Advanture?</h1>
      <button @click="onBooks">Let's Start</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  methods: {
    onBooks() {
      this.$router.push("/book");
    },
  },
};
</script>