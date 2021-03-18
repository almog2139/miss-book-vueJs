<template>
  <div class="about-page">
    <img src="@/assets/img/book-shop.jpg" />
    <h3>Lorem ipsum adipisicing elit. Quo quos magni commodi unde rerum sed!</h3>
    <h3>Mollitia excepturi ullam quibusdam asperiores magnam accusamus</h3>
    <p>
      <font-awesome-icon :icon="['fa', 'map-marked-alt']" />Tel-aviv
    </p>
    <router-link to="/about/team">Meet our team!</router-link>
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>
.<script>
export default {
  data() {
    return { interval: null };
  },
  created() {
    this.interval = setInterval(() => {
      console.log("In Interval");
    }, 1000);
  },
  destroyed() {
    clearInterval(this.interval);
  },
};
</script>