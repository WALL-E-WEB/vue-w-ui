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
import Alert from "../compoments/alert/alert.vue";
export default {
  components: {
    Alert
  },
  data() {
    return {
      formValidate: {
        gender: "",
        bootStrapTime: "",
        bootOffTime: ""
      },
      tempdate1: "",
      tempdate2: "",
      ruleValidate: {
        gender: [
          { required: true, message: "Please select gender", trigger: "change" }
        ],
        bootStrapTime: [
          {
            required: true,
            type: "string",
            message: "不能为空",
            trigger: "blur"
          },
          {
            required: true,
            validator: (rule, value, callback) => {
              console.log(this);
              if (!this.compareDate && this.formValidate.bootOffTime) {
                callback("开始时间不能大于结束时间");
                return;
              }
              if (!this.formValidate.bootOffTime) {
                callback("结束时间不能为空");
                return;
              }
              if (!this.formValidate.bootOffTime) {
                callback("开始时间不能为空");
                return;
              }
              callback();
            }
          }
        ]
        // bootOffTime: [
        //   {
        //     required: true,
        //     type: "string",
        //     message: "Please select time",
        //     trigger: "blur"
        //   }
        // ]
      },
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
.box {
  writing-mode: vertical-lr;
  writing-mode: tb-lr;
  height: 100px;
}
</style>
