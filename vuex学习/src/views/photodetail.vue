<template>
  <div>
    <!-- {{$route.params.index}} -->
    <router-link to="/photo">
      <div id="div1">
        <img :src="$store.state.photos[$route.params.index].src">
      </div>
    </router-link>
  </div>
</template>

<script>
import Vue from "vue";
import VueTouch from "vue-touch";
Vue.use(VueTouch, { name: "v-touch" });
import { mapState } from "vuex";


export default {
  data() {
    return {
      isShow: fasle
    };
  },
  created() {
    if (this.$store.state.photos.length == 0) {
      this.$router.push("/photo");
    } else {
      this.isShow = true;
    }
  }
};
</script>

<style scoped>
#div1 {
  position: absolute;
  left: 0;
  top: 1rem;
  right: 0;
  bottom: 0;
  background: black;
}
#div1 img {
  position: absolute;
  top: 50%;
  transform: translateY(-63%);
}
</style>