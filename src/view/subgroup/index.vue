<template>
  <div class="subgroup">
    <div class="nav">
      <!-- <router-link to="alert">介绍s</router-link> -->
      <ul class="menu">
        <li
          v-for="item in SubMenuList"
          :key="item.titles"
          @click="!item.children? onRouterLink(item.route) : ''"
          class="menuList"
        >
          {{item.title}}
          <template v-if="item.children">
            <div
              class="menuchild"
              v-for="list in item.children"
              :key="list.title"
              @click="!list.children? onRouterLink(list.route) : ''"
            >
              {{list.title}}
              <template v-if="list.children">
                <div
                  class="menuson"
                  v-for="i in list.children"
                  :key="i.title"
                  @click="!i.children? onRouterLink(i.route) : ''"
                >{{i.title}}</div>
              </template>
            </div>
          </template>
        </li>
      </ul>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { subMenuList } from "./Data/menu.js";
export default {
  name: "subgroup",
  data() {
    return {
      SubMenuList: []
    };
  },
  created() {
    this.SubMenuList = subMenuList;
  },
  methods: {
    onRouterLink(i) {
      if (this.$route.path !== i) {
        this.$router.push({
          path: i
        });
      }
    }
  }
};
</script>
<style lang="less" >
.box {
  writing-mode: vertical-lr;
  writing-mode: tb-lr;
  height: 100px;
}
.subgroup {
  display: flex;

  .nav {
    // width: 120px;
    min-width: 120px;
    max-width: 316px;
    width: 10%;
    background-color: #fff;
    height: 100%;
    border-right: 2px solid #ccc;
    .menu {
      text-align: left;
      padding: 10px 10px 10px 20px;
      .menuList {
        margin-top: 20px;
        .menuchild {
          margin-top: 16px;
          text-indent: 10px;
          color: #ccc;
          .menuson{
            margin-top: 10px;
            text-indent: 20px;
            color: rgb(104, 103, 103);
      
          }
        }
      }
    }
  }
  .content {
    flex: 1;
    padding: 10px;
  }
}
</style>
