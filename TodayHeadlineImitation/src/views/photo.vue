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
        },
        //   beforeCreate(){//组件生命周期函数
        //     console.log('beforeCreate')
        // },
        // //当进入组件之前，执行 beforRouteEnter 路由钩子函数
        // beforeRouteEnter(to,from,next){
        //     console.log('beforRouteEnter')
        //     console.log(this) // 结果为undefined，因为在执行beforRouteEnter时候，组件还没有被创建出来；先执行beforRouteEnter，再执行beforeCreate
        //     next((vm)=>{ //参数vm就是当前组件的实例。
        //         vm.test = '我被改变了'
        //     })
        // },
        // beforeRouteUpdate(to,from,next){
        //     console.log('beforeRouteUpdate')
        //     next()
        // },
        // beforeRouteLeave(to,from,next){//离开组件的时候触发
        //     //什么都不写的时候，不会离开(走下一步)
        //     console.log("离开了抖音");
        //     next()
        // }
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