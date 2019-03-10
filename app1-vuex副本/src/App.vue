<template>
  <div id="app">
    <cheader  ></cheader>
    <div id="container">
      <router-view></router-view>
    </div>
    <bottom :menu="menu" ></bottom>
  </div>
</template>

<script>
import cheader from "@/components/header.vue";
import bottom from "@/components/bottom.vue";
import {mapMutations} from 'vuex';
export default {
  components: {
    cheader,
    bottom
  },
  data() {
    return {
      menu: [
        {
          path: "/news",
          name: "新闻关注",
          bg: "#cdcdcd"
        },
        {
          path: "/movie",
          name: "热映电影",
          bg: "#c2cade"
        },
        {
          path: "/photo",
          name: "图片",
          bg: "#a29989"
        }
        
      ],
      
    };
  },
 
  methods:mapMutations(["change"]),
  
  created() {
    let result=this.menu.filter((obj,index)=>{
        return    obj.path==this.$route.path;
    });
    // if(result.length==0){
    //   this.bg='red';
    //   this.name='音乐'
    // }
     if(result.length){
        // 修改state中存的name color 改成result[0].name result[0].bgColor
        this.change(result[0]);
      }
  },
}
</script> 

<style>
#container {
  margin-top: 1rem;
  margin-bottom: 1rem;
  height: 100%;
}
#app{
  height: 100%;
}
body{
  height: 100%;
}
html{
  height: 100%;
}
</style>
