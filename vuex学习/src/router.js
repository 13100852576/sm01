import Vue from 'vue';
import Router from 'vue-router';
import music from './views/music.vue'
import movie from './views/movie.vue'
import photo from './views/photo.vue'
import playList from './views/playList.vue'
import detail  from './views/detail.vue'
import slide from './components/slide.vue'
import book from './views/book.vue'
import photodetail from './views/photodetail.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/music',
      component: music
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
      path:'/playList',
      component:playList
    },
    {
      path:"/",
      redirect:'/music'
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
      path:'/book',
      component:book
    },
    {
      path:'/photodetail/:index',
      component:photodetail
    }
  ],
});
