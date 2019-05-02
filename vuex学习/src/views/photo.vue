<template>
  <div class="photo">
        <!-- <img v-for="(obj,index) in photo" :key="index" :src="obj.src" alt> -->
           <img v-for="(photoSrc,index) in $store.state.photos" :key="index" :src="photoSrc.src"  @click='godetail(index)'  alt="">
   
  </div>
</template>
    

<script>
import Axios from "axios";
export default {
//   data() {
//     return {
//       photo: []
//     };
//   },
  created() {
    Axios.get("/data/photodata.json")
      .then(result => {
          this.$store.commit('addphoto',result.data.photoData);
          console.log(this.$store.state.photos)
        // this.photo = result.data.photoData;
        // console.log(this.photo);
      })
      .catch();
  },
  methods: {
      godetail(index){
          this.$router.push('./photodetail/'+index);
      }
  },
};
</script>

<style scoped>
.photo img{
        width:50%;
    }
</style>