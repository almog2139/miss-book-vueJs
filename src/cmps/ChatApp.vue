<template>
<div>
<section v-if="msg">
<ul class="flex column" >

    <li v-for="(msg, index) in msgs" :key="index" :style="{'background-color':msg.color}">
        {{msg.from}}:{{msg.msg}}
  
  </li>
</ul>
</section>
    <form class="chat-app flex" @submit.prevent="onSendMsg">
        <input type="text" v-model="msg" />
        <button type="submit" >send</button>
    </form>
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg:'',
            msgs:[]
        }
    },
    methods:{
        onSendMsg(){
           this.msgs.push({from:'Me',msg:this.msg,color:'lightgrey'})
           setTimeout(()=>{
               this.msgs.push({from:'Support',msg:'Sure thing honey',color:'white'})
           },3000)
        },
        
    },
}
</script>
<style lang="scss">
.chat-app{
    justify-content: center;
    button{
        background-color: black;
        color: white;
    }
    
}
li{
        text-align: left;
    }
</style>