import Vue from 'vue';
import Router from 'vue-router';
import music from './views/music.vue';
import movie from './views/movie.vue';
import photo from './views/photo.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/music',
      component:music
    },
    {
      path:'/movie',
      component:movie
    },
    {
      path:'/photo',
      component:photo
    }
  ],
});
