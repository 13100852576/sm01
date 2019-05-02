<template>
  <div id="container">
    <div class="slide">
      <transition-group name="fade">
        <img v-for="(obj,index) in imgs" :key="index" v-show="index==iNow" :src="obj">
      </transition-group>
    </div>

    <ul class="btns">
      <li v-for="(i,index) in imgs.length" :key="index" :class="{active:index == iNow}"></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // imgs: [],
      iNow: 0
    };
  },
  props: ["imgs"],
  created() {
    setInterval(() => {
      this.iNow++;
      if (this.iNow == this.imgs.length) {
        this.iNow = 0;
      }
    }, 1000);
  }
};
</script>

<style scoped>
#container {
  position: relative;
  /* overflow:hidden; */
  height: 8rem;
}
.slide img {
  position: absolute;
  top: 0;
  top: 0;
  width: 100%;
  height: 6rem;
}

.btns {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0.2rem;
}
.btns li {
  width: 0.2rem;
  height: 0.2rem;
  background: #f00;
  border-radius: 50%;
  float: left;
  margin-right: 0.1rem;
}
.btns li.active {
  background: #0f0;
}

.fade-enter {
  transform: translateX(100%);
}
.fade-enter-active {
  transition: transform 1s ease;
}
.fade-enter-to {
  transform: translateX(0);
}
.fade-leave {
  transform: translateX(0);
}
.fade-leave-active {
  transition: transform 1s ease;
}
.fade-leave-to {
  transform: translateX(-100%);
}
</style>