import Vue from 'vue'
import Router from 'vue-router'

import Music from './views/music/Music.vue'
import Book from './views/book/Book.vue'
import Photo from './views/photo/Photo.vue'
import PhotoDetail from './views/photo/PhotoDetail.vue'
import MusicList from './views/music/MusicList.vue'

import Slide from './components/Slide.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect:'/music'
    },
    {
      path:'/music',
      component:Music
    },{
      path:'/book',
      component:Book
    },
    {
      path:'/photo',
      component:Photo
    },
    {
      path:'/photodetail/:index',
      component:PhotoDetail
    },
    {
      path:'/musiclist',
      component:MusicList
    },{
      path:'/slide',
      component:Slide
    }
  ]
})
