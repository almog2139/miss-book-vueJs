<template>
  <section class="bgc" v-if="msg.msg">
    <div :class="modalMsgClass" v-if="msg.msg">
      <button :class="pClass" @click="onCloseModal">X</button>
      <font-awesome-icon :icon="['fa', 'times']" class="icon-times" v-show="msg.msg.typeMsg==='error'" />
      <font-awesome-icon :icon="['fa', 'check']" class="icon-check" v-show="msg.msg.typeMsg==='success'" />
      <div class="flex column justify-center align-center">
        <h1 v-if="msg.msg.typeMsg" :class="pClass">{{msg.msg.typeMsg.toUpperCase()}}!</h1> 
        <p>{{msg.msg.txt}}</p>
     </div>
    </div>
  </section>
</template>

<script>

export default {
props:['msg'],
  methods: {
     async onCloseModal(){
        await this.$store.dispatch({ type: 'showMsg', msg: '' })
    }
  },
  computed: {
       
       modalMsgClass(){
           return{'modal success':this.msg.msg.typeMsg==='success','modal error':this.msg.msg.typeMsg==='error'}
       },
       pClass(){
           return{ success:this.msg.msg.typeMsg==='success',error:this.msg.msg.typeMsg==='error'}
       }
  },
};
</script>
<style lang="scss" scoped>
.icon-times {
  font-size: 3rem;
  color: red;
}
.icon-check {
  font-size: 3rem;
  color: green;
}
</style>
