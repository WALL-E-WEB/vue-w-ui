<!--
 * @Author: your name
 * @Date: 2019-12-28 11:34:51
 * @LastEditTime : 2019-12-28 13:29:03
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\my\src\App.vue
 -->
<template>
  <div id="app">
    <div>
      <router-link to="/home">Go to home</router-link>
      <router-link to="/login">login</router-link>
      <router-link to="/dateCom">dateCom</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  }
};
</script>

<style>
#app {
  width: 100%;
  height: 800px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
