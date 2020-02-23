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
    <div class="header">
      <div class="head-l">
        <span class="logo">logo</span>
        <span class="logoName">name</span>
      </div>
      <div class="head-r">
        <router-link to="/home">介绍</router-link>
        <router-link to="/subgroup">组件</router-link>
      </div>
    </div>
    
    <div class="main">
      <router-view></router-view>
    </div>
  
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

<style lang="less">
#app {
  width: 100%;
  height: 800px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(241, 240, 240);
}
li{
  list-style:none;
}
.header {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  height: 80px;
  background-color: #fff;
  .head-l,
  .head-r{
    display: flex;
    align-content: center;
    line-height: 60px;
  }
}
.main{
  margin-top: 10px;
}
.header a {
  margin-right: 10px;
  border-radius: 4px;
  padding: 4px;
}
.router-link-active {
  color: skyblue;
}
</style>
