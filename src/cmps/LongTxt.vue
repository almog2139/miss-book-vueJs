<template>
  <div>
     <transition name="bounce" v-if="isLongTxtShow">
    <p>{{getDescription}}</p>
  </transition>
    <p v-else>{{getDescription}}</p>

    <button @click="toggleDescription">{{btnTxt}}</button>
  </div>
</template>
<script>
export default {
  props: {
    txt:String
  },
  methods: {
    toggleDescription() {
      // this.show = !this.show
      this.isLongTxtShow = !this.isLongTxtShow;
    },
  },
   data() {
    return {
      isLongTxtShow: false,
      show:true
    };
  },

  computed: {
    getDescription() {
      console.log("here", this.txt);
      let desc = "";

      if (this.isLongTxtShow) desc = this.txt;
      else desc = this.txt.substring(0, 50) + "...";
      return desc;
    },
    btnTxt() {
      let btnText = this.isLongTxtShow ? "show less" : "show more";
      return btnText;
    },
  },
};
</script>