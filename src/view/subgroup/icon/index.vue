<template>
  <div>
    <Icon type="success" size="40" color="red" @click="onBtn"></Icon>
  </div>
</template>

<script>
import Icon from "../../compoments/icon";
export default {
  components: {
    Icon
  },
  methods:{
      onBtn(){
          console.log('a');
          
      }
  }
};
</script>

<style>
</style>