/*
 * @Author: your name
 * @Date: 2019-12-28 11:34:51
 * @LastEditTime : 2019-12-28 14:24:15
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\my\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);
Vue.config.productionTip = false
Date.prototype.format = function (fmt) {
      var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "h+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            S: this.getMilliseconds() //毫秒
      };

      if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(
                  RegExp.$1,
                  (this.getFullYear() + "").substr(4 - RegExp.$1.length)
            );
      }

      for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                  fmt = fmt.replace(
                        RegExp.$1,
                        RegExp.$1.length == 1
                              ? o[k]
                              : ("00" + o[k]).substr(("" + o[k]).length)
                  );
            }
      }

      return fmt;
};

new Vue({
      router,
      store,
      render: h => h(App),
}).$mount('#app')
