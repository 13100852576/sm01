<template>
    <div   v-if="isShow">
     <!-- {{$route.params.ID}}
     {{movieDetail.title}} -->
     
     <img :src="movieDetail.images.small"  >
     
    </div>
</template>

<script>
    import Axios from 'axios'
    export default {
         data(){
            return {
                movieDetail:{},
                isShow:false
            }
        },
        created () {
            Axios.get("/data/moviedetail.json").then((result)=>{
               this.movieDetail = result.data;
               console.log(this.movieDetail);
               this.isShow=true;
               }).catch(()=>{
                console,log('失败了');
            })
        }
    }
</script>

<style scoped>

</style>