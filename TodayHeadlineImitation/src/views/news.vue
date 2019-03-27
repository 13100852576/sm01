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
  
  }
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










