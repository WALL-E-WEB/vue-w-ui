<template>
  <div :class="typeClasss" v-if="isClose">
    <span :class="iconClasss" v-if="showIcon"></span>
    <div>
      <div class="title">
        <slot>标题</slot>
      </div>
      <div class="desc">
        <slot name="desc"></slot>
      </div>
    </div>
    <span :class="closeClasss" v-if="closable" @click="onClose">
      <slot name="close">
        <span>x</span>
      </slot>
    </span>
  </div>
</template>

<script>
const prefixCls = "w-alert";
export default {
  name: "Alert",
  props: {
    type: {
      type: String,
      default: "info"
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isClose: true,
      desc: false
    };
  },
  methods: {
    onClose(e) {
      this.isClose = false;
      this.$emit("on-close", e);
    }
  },
  computed: {
    typeClasss() {
      return [
        `${prefixCls}`,
        `${prefixCls}-${this.type}`,
        {
          [`${prefixCls}-desc`]: this.desc
        }
      ];
    },
    closeClasss() {
      return `${prefixCls}-close`;
    },
    iconClasss() {
      return [
        "iconfont",
        `${prefixCls}-icon`,
        `icon-${this.type}`,
        `${prefixCls}-${this.type}-icon`
      ];
    }
  },
  mounted() {
    this.desc = this.$slots.desc !== undefined;
  }
};
</script>

<style scoped lang="less">
@import "../../../style/base.less";
@css-prefix :w-;
@alert-prefix-cls: ~"@{css-prefix}alert";
// @alert-prefix-cls: ~"w-alert";
.@{alert-prefix-cls} {
  position: relative;
  padding: 8px 48px 8px 16px;
  font-size: @font-size-base;
  border-radius: @border-radius-small;
  line-height: 16px;
  margin-bottom: 10px;
  text-align: justify;
  letter-spacing: 1px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &-with-icon {
    // padding: 8px 48px 8px 38px;
    // padding: 8px 48px 8px 38px;
    font-size: 20px;
  }
  &-info {
    border: 1px solid @info-color;
  }
  &-success {
    border: 1px solid @success-color;
  }
  &-warning {
    border: 1px solid @warning-color;
  }
  &-error {
    border: 1px solid @error-color;
  }
  &-close {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }
  &-info-icon {
    color: @info-color;
  }
  &-success-icon {
    color: @success-color;
  }
  &-warning-icon {
    color: @warning-color;
  }
  &-error-icon {
    color: @error-color;
  }
  .title {
    padding-left: 10px;
    margin-bottom: 4px;
  }
  .desc {
    padding-left: 10px;
    color: @text-color;
  }
  &-desc &-icon {
    font-size: 30px;
  }
}
</style>