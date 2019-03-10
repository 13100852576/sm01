<template>
  <div>
    <ul >
      <li v-for="(obj,index) in musicList" :key="index">
             <img :src="obj.bg" @click="goList" />

      </li>
    </ul>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      musicList: []
    };
  },
  created() {
    this.getMusic();
    
  },
  methods: {
    getMusic() {
      Axios.get("data/musiclist.json")
        .then(result => {
          console.log(result.data.albums);
          this.musicList = result.data.albums;
        })
        .catch();
    },
   goList(){
                this.$router.push('/playList');
            }
  }
};
</script>

<style scoped>
img {
  width: 50%;
  height: 50%;
  float: left;
}
</style>










