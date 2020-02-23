<template>
  <div>
      <Alert closable show-icon>标题</Alert>
    <Alert type="success" closable show-icon>标题4444444加速度快放假刷卡的积分开始的减肥刷卡的积分开始的减肥都是咖啡机刷卡的积分开始的减肥开机</Alert>
    <Alert type="warning" closable show-icon>
      标题
      <template v-slot:desc>肯德基付款时间的看法教师端</template>
    </Alert>
    <Alert type="error" closable show-icon @on-close="AlertClose">
      标题
      <template v-slot:desc>肯德基付款时间的看法教师端</template>
    </Alert>
  </div>
</template>

<script>
import Alert from "../../compoments/alert/alert.vue";

export default {
  data() {
    return {
      formValidate: {
        gender: "",
        bootStrapTime: "",
        bootOffTime: ""
      },
      tempdate1: "",
      tempdate2: "",
      firstname: "",
      newName: "close",
      dataa: {
        name: "苦苦"
      }
      // user: "wang"
    };
  },
  methods: {
    btn() {
      console.log("bb");
      this.newName = "desc";
      console.log(this.newName);
    },
    AlertClose(e) {
      console.log(e);
    }
  },
  computed: {
    compareDate: function() {
      let bootStrapTime = this.formValidate.bootStrapTime;
      let bootOffTime = this.formValidate.bootOffTime;
      let s = bootStrapTime.replace(/[^0-9]/gi, "");
      let f = bootOffTime.replace(/[^0-9]/gi, "");
      console.log(s, f);
      console.log(Number(s) < Number(f));

      return Number(s) < Number(f);
    }
  },
  created() {
    // this.logMsage();

    if (true) {
      return;
    }
    console.log("bbb");
  }
};
</script>

<style>

</style>