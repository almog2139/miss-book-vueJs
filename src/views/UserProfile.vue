<template>
<section class=" user-profile flex column " v-if="user">
    <h1>User Profile</h1>
    <form @submit.prevent="onSaveUserProfile" class="flex column">
    <gender-picker v-model="user.gender"/>
  <color-picker v-model="user.favColor" />

  <time-picker v-model="user.reminderTime"/>
  <button type="submit">Save </button>
  </form>
  </section>
</template>

<script>
import ColorPicker from "@/cmps/ColorPicker";
import GenderPicker from "@/cmps/GenderPicker";
import TimePicker from "@/cmps/TimePicker";
export default {
  data() {
    return {
        user:null
    //   user: {
    //     gender: '',
    //     reminderTime: {
    //         hour:0,
    //         minute:0,
    //         time:'PM'
    //     },
    //     favColor: "",
    //   },
    };
  },
//     computed:{
//     user(){
//       return this.$store.getters.getUser
//     }
//   },
   async created() {
      this.user=await this.$store.dispatch({ type: 'loadUser'});
  },
  methods:{
      onSaveUserProfile(){
         console.log('heree',this.user);
         this.$store.dispatch({ type: 'saveUser',user:this.user})
    }  
  },
  components: {
    ColorPicker,
    GenderPicker,
    TimePicker
  },
};
</script>
<style lang="scss">
section{
    padding: 2em;
    >*{
        margin-bottom: 10px;
    }
}
.user-profile{
    gap:25px
}
form{
    flex-wrap: wrap;
      >*{
        margin-bottom: 10px;
    }
    button{
        width: 50px;
        margin: auto;
       background-color: #b939b9;
       color: black;
    }
}
</style>