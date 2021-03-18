

<template>
  <div id="app">
    <app-header />
     <user-msg :msg="userMsg" v-show="userMsg"/>
     
    <router-view />
  </div>
</template>
<script>

import AppHeader from './views/AppHeader.vue'
import UserMsg from '@/cmps/UserMsg.vue'

export default {
 
  components: {
    AppHeader,
    UserMsg,
  
  },
  computed: {
    userMsg() {
      return this.$store.getters.msg;
    },
  },
}
</script>