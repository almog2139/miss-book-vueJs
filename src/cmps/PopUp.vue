<template>
  <section class="bgc">
    <section class="pop-up book-add">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </section>
  </section>
</template>
<script>
export default {
      methods:{
      
         escapekeylistener(evt) {
             console.log('here',evt);
             if (evt.keyCode === 27) {  
                 console.log('YES');
                 this.$emit('closePopUp');
             }
         }
    },
     mounted(){
    document.addEventListener('keyup', this.escapekeylistener);
  },
  destroyed() {
    document.removeEventListener('keyup', this.escapekeylistener);
  },
}
</script>
<style lang="scss" scoped>
.pop-up {
  text-align: center;
  height: 500px;
  width: 500px;
  padding: 20px;
  margin: 10px;
}
</style>