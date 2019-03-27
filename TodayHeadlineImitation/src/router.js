import Vue from 'vue';
import Router from 'vue-router';
import news from './views/news.vue'
import movie from './views/movie.vue'
import photo from './views/photo.vue'

import detail  from './views/detail.vue'
import slide from './components/slide.vue'

import photodetail from './views/photodetail.vue'

Vue.use(Router);

const router= new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/news',
      component: news,
      name:"新闻"
    },
    {
      path: '/movie',
      component: movie,
      name:"电影"
    },
    {
      path: '/photo',
      component: photo,
      name:"图片"
    },
    
    {
      path:"/",
      redirect:'/news'
    },
    {
      path:'/detail/:ID',
      component:detail
    },
    {
      path:'/slide',
      component:slide
    },
    
    {
      path:'/photodetail',
      component:photodetail
    }
  ],
});
router.beforeEach((to, from, next) => {　　

    console.log("全局守卫");
    console.log(to);
    console.log(from);
    console.log("全局守卫")　　
    
    if(from.name==null){
      console.log("页面初始");
      next()  
    }
    else if(to.name==from.name){
      console.log("没有发生页面的跳转");
      
    }else{
      console.log("发生了页面的跳转");
      next()  
    }

 
  
  　　
  });


  export default  router;
