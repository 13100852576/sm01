<template>
    <div id="div2">
                <ul>
                    <li v-for="(obj,index) in menu" :key='index'>
                        <router-link  :to=''>{{obj.name}}</router-link>
                    </li>
                </ul>
    </div>
</template>

<script>
    export default {
        props:['menu']
    }
</script>

<style scoped>
#div2{
    width: 100%;
    height: 1rem;
    background: red;
    position: fixed;
    bottom: 0;
    left: 0;
    
   
}
#div2 li{
   flex-grow: 1;
    text-align: center;
}
#div2 ul{
    display: flex;
   line-height: 1rem;
}
</style>