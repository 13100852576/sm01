import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      bg:"red",
      name:'音乐',
      photos:[]
  },
  mutations: {
    change(state,obj){
        state.bg=obj.bg,
        state.name=obj.name,
        console.log(state.bg);
    },
    addphoto(state,photo){
          state.photos=photo
    }
  },
  actions: {

  },
});
