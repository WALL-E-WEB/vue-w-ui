<template>
  <i :class="iconClasss" :style="iconStyles" @click="handleClick">icon</i>
</template>

<script>
const prefixCls = "w-icon";
export default {
  props: {
    type: {
      type: String,
      default: ""
    },
    size: {
      type: [Number, String]
    },
    color: {
      type: String
    },
    custom: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  methods:{
      handleClick(e){
          this.$emit('click',e)
      }
  },
  computed: {
    iconClasss() {
      return ["iconfont", `icon-${this.type}`];
    },
    iconStyles() {
      let style = {};
      if (this.size) {
        // style["font-size"] = `${this.size}px`;
        style.fontSize = `${this.size}px`;
      }
      if (this.color) {
        style.color = `${this.color}`;
      }
      return style;
    }
  }
};
</script>

<style lang="less">
@import "../../../style/base.less";
</style>