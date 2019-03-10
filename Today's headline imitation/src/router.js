import Vue from 'vue';
import Router from 'vue-router';
import news from './views/news.vue'
import movie from './views/movie.vue'
import photo from './views/photo.vue'

import detail  from './views/detail.vue'
import slide from './components/slide.vue'

import photodetail from './views/photodetail.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/news',
      component: news
    },
    {
      path: '/movie',
      component: movie
    },
    {
      path: '/photo',
      component: photo
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
