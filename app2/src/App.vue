<template>
  <div id="app">
 <cheader></cheader>
 <cfooter :menu='menu'></cfooter>
  </div>
</template>



<script>
 import  cheader from '@/components/header.vue';
  import  cfooter from '@/components/footer.vue';

  export default {
      components:{
        cheader,
        cfooter
      },
      data(){
        return {
          menu:[
          {
            path:'/music',
            name:'music',
           
          },
          {
            path:'/movie',
            name:'movie',
         
          },
          {
            path:'/photo',
            name:'photo',
       
          }

          ]
        }
      },
   
  }
</script>

<style scoped>

</style>