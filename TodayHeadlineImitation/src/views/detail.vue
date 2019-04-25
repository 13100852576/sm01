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
            
               this.isShow=true;
               }).catch(()=>{
                
            })
        }
    }
</script>

<style scoped>

</style>