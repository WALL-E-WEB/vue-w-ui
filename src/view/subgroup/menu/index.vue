<template>
  <div>
    <Menu name="menu">
      <Submenu>
        <template v-slot:title>标题</template>
        <MenuItem v-for="item in 6" :key="item" to="icon" />
      </Submenu>
      <menA />
    </Menu>
  </div>
</template>

<script>
import Menu from "../../compoments/menu";
import MenuItem from "../../compoments/menu-item";
import Submenu from "../../compoments/submenu";
import menA from './menu.jsx'
// import menA from './menB'
export default {
  components: {
    Menu,
    MenuItem,
    Submenu,
    menA
  },
  data() {
    return {
      dataList: [
        {
          title: "搜也",
          to: "icon"
        }
      ]
    };
  },
  mounted() {
  },
  methods: {
  

  }
};
</script>

<style>
</style>