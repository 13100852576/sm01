<template>
<div>
 {{$store.state.count}}
 <br>
 {{count}}
 <br>
 {{sum}}
 <button @click="$store.commit('add')">add</button>
    <button @click="add(3)">add</button>
    <button @click="addAction()">add</button>
</div>

</template>
<script>
  import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
    export default {
        computed:{ 
            ...mapState(['count']),
            ...mapGetters(['sum']),
            },
            methods: {
                ...mapMutations(['add']),
                ...mapActions(['addAction'])
                }
                }

</script>

<style scoped>

</style>