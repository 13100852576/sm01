import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import sm from './views/sm.vue';
import wq from './views/wq.vue';
import ls from './views/ls.vue';
import chil from './views/chil.vue';
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
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },{
      path: '/sm',
      // name: 'home',
      component: sm,
    },
    {
      path: '/wq',
      name: 'wq',
      component: wq,
    },
    {
      path: '/ls/:age/:name',
      name: 'ls',
      component: ls,
    },
    {
      path:'/chil',
      name:'chil',
      component:chil,
      children:[{
        path:'/A',
        component:A,
      },
      {
        path:'/B',
        component:B,
      },
    ]
    },
    {
      path:'/red',
      redirect:'/'
    },
    // 重定向
    {
      path:'/red2/:age/:name',
      redirect:'/ls/:age/:name'
    }
    // 重定向带参数
  ],
});
