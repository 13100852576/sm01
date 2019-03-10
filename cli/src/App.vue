<template>
  <div id="app">
      <button @click="prev()">上一页</button>
      <button @click='goHome()'>主页面</button>
      <button @click='next()'>下一页</button>
      <!-- 编程式导航 按钮 -->

    <div id="nav">
      <router-link to="/">Home</router-link> | 
      <router-link to="/about">About</router-link>  |
      <router-link to="/sm">sm</router-link>  |    
      <!-- 添加组件 -->
      <!--  -->
      <router-link :to="{name:'wq',params:{name:'wq',age:'23'}}">wq</router-link>  |
      <!-- 添加组件带属性1 -->
      <router-link to="/ls/22/wangba">ls</router-link>  |
      <!-- 添加组件带属性2 -->
      <router-link to="/chil">chil</router-link>  |
      <!-- 带有子组件 -->
       <router-link to="/red">red</router-link>  |
       <!-- 重定向 -->
       <!-- 设置别名 -->
       <router-link to="/red2/99/laohu">red2</router-link>  |
       <!-- 重定向带参数 -->
       <router-link to="/store">store</router-link>  |
       <!-- vuex的参数传递 -->
       <router-link to="/error">error</router-link>  |
       <!-- 错误路径 -->

    </div>

    <transition name="fade">
       
      <router-view/>
    </transition>  
  
  </div>
</template>

<script>
export default {
  methods:{
    prev(){
      this.$router.go(-1);
    },
    next(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push('/');
    }
  }
}
// 编程式导航的方法
</script>

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



.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 1s ease;
}
.fade-enter-to{
  opacity: 1;
}
/* 动画1 */


/* .fade-enter{

  transform: translateX(-100%);
}
.fade-enter-active{
  transition: transform 1s ease;
}
.fade-enter-to{
 
  transform: translateX(0);
} */

/* 动画2 */

/* .fade-leave{
  opacity: 1;
}
.fade-leave-active{
  transition: opacity 2s ease;
}
.fade-leave-to{
  opacity: 0;
} */
/* 动画3 */
</style>
