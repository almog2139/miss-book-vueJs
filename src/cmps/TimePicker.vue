<template>
  <div class="time-picker flex">
    <div class="flex column">
          <font-awesome-icon :icon="['fa', 'angle-up']" @click="onChangeHour(1)"/>
      {{value.hour}} :
       <font-awesome-icon :icon="['fa', 'angle-down']" @click="onChangeHour(-1)"/>
    </div>
    <div class="flex column">
     <font-awesome-icon :icon="['fa', 'angle-up']" @click="onChangeMinute(1)"/>
      {{value.minute}} :
      <font-awesome-icon :icon="['fa', 'angle-down']" @click="onChangeMinute(-1)"/>
    </div>
    <div class="flex column">
     <font-awesome-icon :icon="['fa', 'angle-up']" @click="onChangeTime('PM')"/>
      {{value.time}}
    <font-awesome-icon :icon="['fa', 'angle-down']" @click="onChangeTime('AM')"/>
    </div>
  </div>
 
</template>
<script>
export default {
  props: {
    value: Object,
  },
  methods: {
    onChangeHour(diff) {
      if (this.value.hour + diff < 0 || this.value.hour + diff > 12) return;
      else {
        this.value.hour = this.value.hour + diff;
      }
       this.$emit('input', this.value);
    },
    onChangeMinute(diff) {
      if (this.value.minute + diff < 0) return;
      if(this.value.minute + diff === 60){
          if(this.value.hour<12)this.value.hour++;
          else this.value.hour=1
          this.value.minute=0;
      }
      else {
        this.value.minute = this.value.minute + diff;
      }

        this.$emit('input', this.value);
    },
    onChangeTime(time){
       this.value.time=time
         this.$emit('input',this.value);
    }
  },
};
</script>
<style lang="scss" scoped>
.time-picker{
    margin: auto;
    align-items: center;
    justify-content: center;
    & >*{

        margin-right: 10px;
    }
}
</style>