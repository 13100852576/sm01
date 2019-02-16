<template>
  <div id="app">
    <cheader :bg="bg" :name="name"></cheader>
    <div id="container">
      <router-view></router-view>
    </div>
    <bottom :menu="menu" :bg="bg" @changebg="cbg"></bottom>
  </div>
</template>

<script>
import cheader from "@/components/header.vue";
import bottom from "@/components/bottom.vue";
export default {
  components: {
    cheader,
    bottom
  },
  data() {
    return {
      menu: [
        {
          path: "/music",
          name: "音乐",
          bg: "red"
        },
        {
          path: "/movie",
          name: "电影",
          bg: "yellow"
        },
        {
          path: "/photo",
          name: "图片",
          bg: "pink"
        }
      ],
      bg: "red",
      name: "音乐",
      path: "/music"
    };
  },
  methods: {
    cbg(bg, name) {
      this.bg = bg;
      this.name = name;

      console.log(bg);
    }
  },
  created() {
    var thepath = this.$route.path;
    var result = this.menu.filter((obj, index) => {
      return thepath == obj.path;
    });
    this.name = result[0].name;
    this.bg = result[0].bg;
  }
};
</script> 

<style>
#container {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
