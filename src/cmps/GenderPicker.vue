<template>
  <div class="gender flex column">
    <h1>Gender Picker</h1>
    <p @click="onChangeGender('Male')">👧 Male</p>
    <p @click="onChangeGender('Female')">🧒 Female</p>
    <p @click="onChangeGender('Noy Say')">🕵🏻‍♀️ I'd rather noy say</p>
  </div>
</template>

<script>
export default {
  props: ["value"],
  methods: {
    onChangeGender(gender) {
    //   this.value = gender;
      this.$emit("input", gender);
    },
  },
};
</script>
<style lang="scss" scoped>
.gender {
  border-color: #c5c7d0;
  text-align: center;
  background-color: white;
  box-shadow: 0px 0px 10px 0px rgba(50, 50, 50, 0.2);
  margin: auto;
  width: 200px;
  p {
    background-color: whitesmoke;
    margin-bottom: 5px;
    &:checked {
    //  background-color: darken(whitesmoke,20);
     background-color: black;
    }
  }
}
</style>