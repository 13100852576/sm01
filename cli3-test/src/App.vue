<template>
  <div id="app">
      <button @click="prev()">上一页</button>
      <button @click='goHome()'>主页面</button>
      <button @click='next()'>下一页</button>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <!-- <router-link to="/about">About</router-link>  | -->
       <router-link to="/about/123/ls">About</router-link>  |
      <router-link to="/cc/456/zs">cc</router-link>  |
       <!-- <router-link to="/Mine">Mine</router-link> | -->
       <router-link :to="{name:'Mine',params:{name:'zs',age:'19'}}">Mine</router-link> |
       <router-link to="/yours">yours</router-link> |


    </div>
    <transition name='a'>
   <router-view/>
   </transition>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
/* .fade-enter{
  opacity:0;
}
.fade-enter-to{
  opacity:1;
}
.fade-enter-active{
  transition: opacity 2s ease;
} */

.a-enter{

  transform: translateX(-100%);
}
.a-enter-active{
  transition: transform 1s ease;
}
.a-enter-to{
 
  transform: translateX(0);
}

</style>
