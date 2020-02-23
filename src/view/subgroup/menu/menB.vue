

<script>
export default {
  methods: {
    btn() {
      console.log("bbb");
      console.log(this.prop);
      
    }
  },
  props:{
      data:{
          type:String,
          default:'aa'
      }
  },
  render(h) {
    return h(
      "h1",
      {
        class: "menb",
        attrs: {
          id: "boo",
          data: "789"
        },
        props:{
            data:{
                type:String,
                default:'wo'
            }
        },
        // domProps: {
        //   innerText: data
        // },
        on: {
          click: this.btn
        }
      },
    //   `wp${this.data}`
      [h("p", {
          props:{
              title:'ppp'
          }
      },'lala'), h("p", this.data)]
    );
  }
};
</script>

<style>
</style>