import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: 
  {
      count:9,
      b:5
  },
//   放属性


  mutations:
   {
      add(state){
       state.count=state.count+1;
      }
  },
//   属性值改变
  getters:{
    sum(state){
        return state.count + state.b;
    }
  },
//   计算属性值
  actions: {
        addAction({commit}){
            commit('add');
        }
  },
});
