<template>
  <div id="div1" :style="{background:bg}">
    <p>首页</p>
    {{name}}
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["bg", "name"])
};
</script>


<style scoped>
#div1 {
  width: 100%;
  height: 1rem;
  background: red;
  position: fixed;
  text-align: center;
  line-height: 1rem;
  top: 0;
}
p {
  position: absolute;
  left: 0.1rem;
  top: 50%;
  transform: translateY(-50%);
}
</style>