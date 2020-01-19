<template>
  <div class="login">
    login
    <span v-for="item in data" :key="item" :ref="'divbox'+item" class="box">{{item}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: 12
    };
  },
  async created() {
    localStorage.setItem("login", "login");
    setTimeout(() => {
      console.log(4);
    }, 1000);
    console.log(1);
  },
  methods: {},
  mounted() {
    console.log(2);
    setTimeout(() => {
          console.log(this);
          
      this.data = 2000;
      console.log(5);
      this.$nextTick(() => {
        console.log(7);
        console.log(this.$refs.divbox1);
        console.log(document.getElementsByClassName("box")[12].offsetLeft);
      });
    }, 1000);
    setTimeout(function(){
          console.log(this);
          
    }, 1000);
    this.$nextTick(()=>{
          console.log(3);
          
    })
  },
  updated() {
    console.log(6);
    this.data=20
    this.$nextTick(() => {
      console.log(8);
    });
  }
};
</script>

<style>
/* div{ */
/* height: 400px; */
/* width: 100px; */
/* font-size: 50px; */
/* color: red; */
/* background-color: red; */
/* } */
.login {
  position: relative;
}
.box {
  /* position: absolute; */
  /* left: 10px; */
  margin-left: 10px;
}
</style>