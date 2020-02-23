<template>
  <!-- <a class="to" v-if="to"  href="" >l</a> -->
  <!-- <li v-else @click="onTo" name="op">li</li> -->
  <li  @click="onTo" name="op">lddddi</li>
</template>

<script>
export default {
  name: "lalal",
  props: {
    to: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  methods: {
    onTo() {
      let router = this.$router.resolve("/icon", this.$route, true);
      console.log(router);
      // window.open(router.herf,'aaa')
      console.log(this.$parent);
      console.log(this.$options);
    //   window.location.href = this.to
    this.$router.push(this.to)
    
    }
  }
};
</script>

<style>
.to{
    display: block;
}
</style>