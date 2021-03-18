<template>
  <div class="main-container">
    <nav class="flex space-between align-center">
      <div class="logo">
        <h1>Books<span class="logo-point">.</span></h1>
      </div>
      <div :class="menuClass">
        <router-link to="/book">Book-Shop</router-link>
        <router-link   to="/about">About</router-link>
        <router-link   to="/user">User Profile</router-link>
         <router-link to="/"  active-class="active" exact>Home</router-link>
      </div>
    
        <div :class="hamburger" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        
    </nav>
  </div>
</template>
<script>

export default {
  data(){
    return{
      isShowMenu:true
    }
  },
  computed:{
     menuClass() {
      return{ "main-nav":this.isShowMenu,'main-nav hide':!this.isShowMenu}
    },
     hamburger() {
      return{ "hamburger-btn":this.isShowMenu,'hamburger-btn open':!this.isShowMenu}
    }

  },
  methods:{
    toggleMenu(){
      this.isShowMenu=!this.isShowMenu
    },
    
  }
};
</script>