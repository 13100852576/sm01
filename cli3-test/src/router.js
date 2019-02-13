import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Mine from './views/Mine.vue';
import yours from './views/yours.vue';
import A from './views/A.vue';
import B from './views/B.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cc/:age/:name',
      redirect: '/about/:age/:name'
    },
    {
      path: '/about/:age/:name',
      name: 'about',
      component: About

      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    }
    // {
    //   path: '/Mine',
    //   name: 'Mine',
    //   component: Mine,
    // },
    // {
    //   path: '/yours',
    //   // name: 'home',
    //   component: yours,
    //   children: [{
    //     path: '/A',
    //     // name: 'home',
    //     component: A,
    //   },
    //   {
    //     path: '/B',
    //     // name: 'home',
    //     component: B,
    //   }
    //   ]
    // },
   
  ]
});
