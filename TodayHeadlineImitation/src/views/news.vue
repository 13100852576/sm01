<template>
  <div>
    <ul >
     
      <li v-for="(obj,index) in newsList" :key="index">
         <div id="div1">
          <span>
          {{obj.name}}
        </span>
        <img :src="obj.bg"  />
        </div>
    </li>
   
    </ul>
     <img class="loading" v-show="isShow" src="@/imgs/loading.gif" alt>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      newsList: [],
       isShow: false,
    };
  },
  created() {
    this.getMusic();
        window.onscroll = () => {
      // 滚动条滚动的高度
      // console.log(document.documentElement.scrollTop);
      // 可视区的高度
      // console.log(document.documentElement.clientHeight);
      // 整个滚动区的高度
      // console.log(document.documentElement.scrollHeight);
      if (
        document.documentElement.scrollTop +
          document.documentElement.clientHeight ==
          document.documentElement.scrollHeight 
      ) {
        this.getMusic();
      }
    };
    this.getMusic();
    
  },
  methods: {
    getMusic() {
      this.isShow = true;
      Axios.get("data/newslist.json")
        .then(result => {
          // console.log(result.data.albums);
           this.newsList = [...result.data.albums, ...this.newsList];
          this.isShow = false;
        })
        .catch();
    },
  
  },
  // beforeCreate(){//组件生命周期函数
  //           console.log('beforeCreate')
  //       },
  //       //当进入组件之前，执行 beforRouteEnter 路由钩子函数
  //       beforeRouteEnter(to,from,next){
  //           console.log('beforRouteEnter')
  //           console.log(this) // 结果为undefined，因为在执行beforRouteEnter时候，组件还没有被创建出来；先执行beforRouteEnter，再执行beforeCreate
  //           next((vm)=>{ //参数vm就是当前组件的实例。
  //               vm.test = '我被改变了'
  //           })
  //       },
  //       beforeRouteUpdate(to,from,next){
  //           console.log('beforeRouteUpdate')
  //           next()
  //       },
  //       beforeRouteLeave(to,from,next){//离开组件的时候触发
  //           //什么都不写的时候，不会离开(走下一步)
  //           console.log("离开了新闻");
  //           next()
  //       }
};
</script>

<style scoped>
#div1{
  background-color:white;
}
img {
  width: 100%;
  height: 50%;
 
}
li{
    margin-bottom:5px ; 
    padding-left: 5px;
    padding-right: 5px;
   border:1px solid transparent;
    border-top-color: #c1c1c1;

}
ul{
  overflow: hidden;
 
}
div{
   /* background-color: #c1c1c1; */
}

.loading {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 1rem;
  height: 1rem;
}
</style>










