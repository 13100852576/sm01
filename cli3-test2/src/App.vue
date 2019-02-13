<template>
  <div id="app">


    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>  |
      <router-link to="/sm">sm</router-link>  |    
      <!-- 添加组件 -->
      <router-link :to="{name:'wq',params:{name:'wq',age:'23'}}">wq</router-link>  |
      <!-- 添加组件带属性1 -->
      <router-link to="/ls/22/wangba">ls</router-link>  |
      <!-- 添加组件带属性2 -->
      <router-link to="/chil">chil</router-link>  |
      <!-- 带有子组件 -->
       <router-link to="/red">red</router-link>  |
       <!-- 重定向 -->
       <router-link to="/red2/99/laohu">red2</router-link>  |
       <!-- 重定向带参数 -->

    </div>

    
    <router-view/>
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
</style>
