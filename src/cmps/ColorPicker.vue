<template>
<section class="flex column text-center">
         <h1> Select a fav Color:</h1>
     <div class="edit-colors">
     
          <span @click="onChangeColor('#FF6E6E')" :style="{ 'background-color': '#FF6E6E' }"></span>
            <span  @click="onChangeColor('#fb275d')" :style="{ 'background-color': '#fb275d' }"></span>
            <span @click="onChangeColor('#FF642E')" :style="{ 'background-color': '#FF642E'}"></span>
            <span @click="onChangeColor('#037F4C')" :style="{ 'background-color': '#037F4C' }"></span>
            <span @click="onChangeColor('#00ca72')" :style="{ 'background-color': '#00ca72' }"></span>
            <span @click="onChangeColor('#61BD4F')" :style="{ 'background-color': '#61BD4F' }"></span>
            <span @click="onChangeColor('#df5e88')" :style="{ 'background-color': '#df5e88' }"></span>
            <span  @click="onChangeColor('#ffcc00')" :style="{ 'background-color': '#ffcc00' }"></span>
            <span  @click="onChangeColor('#41EAD4')" :style="{ 'background-color': '#41EAD4'}"></span>
            <span  @click="onChangeColor('#e1ccec')" :style="{ 'background-color': '#f09ae9' }"></span>
            <span  @click="onChangeColor('#dddddd')" :style="{ 'background-color': '#dddddd' }"></span>
            <span  @click="onChangeColor('#7F5347')" :style="{ 'background-color': '#7F5347' }"></span>
            <span  @click="onChangeColor('#784BD1')" :style="{ 'background-color': '#0086C0' }"></span>
            <span  @click="onChangeColor('#0085ff')" :style="{ 'background-color': '#0085ff' }"></span>
            <span  @click="onChangeColor('#3D315B')" :style="{ 'background-color': '#3D315B' }"></span>
        </div>
        </section>
</template>
<script>
export default {
  props: ['value'],
  methods: {
    onChangeColor(color) {
       
      this.$emit('input', color)
    },
  },
};
</script>