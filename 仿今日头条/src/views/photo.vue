<template>
    <div class="photo">
        <img v-for="(photoSrc,index) in $store.state.photos" :key="index" :src="photoSrc.src" @click="goDetail()" alt="">
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                // photo:[]
            }
        },
        created () {
            axios.get('/data/photodata.json')
            .then((result)=>{
               this.$store.commit('addphoto',result.data.photoData)
            })
        },
        methods:{
            goDetail(){
                this.$router.push('/photodetail');
            }
        }
    }
</script>

<style scoped>
   .photo{
  height: 100%;
}
.photo img{
        width:50%;
        height: 50%;
        /* float: left; */
    }
</style>