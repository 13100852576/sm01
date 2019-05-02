<template>
  <div id="div2" :style="{background:bg}">
    <ul>
      <li v-for="(obj,index) in menu" :key="index">
        <router-link :to="obj.path" @click.native="change(obj)">{{obj.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  props: ["menu"],
  methods: mapMutations(["change"]),
  computed: mapState(["bg", "name"])
};
</script>


<style>
#div2 {
  width: 100%;
  height: 1rem;
  background: red;
  position: fixed;
  bottom: 0;
  left: 0;
}
#div2 li {
  flex-grow: 1;
  text-align: center;
}
#div2 ul {
  display: flex;
  line-height: 1rem;
}
#div2 a {
  color: black;
  outline: none;
}
#div2 a.router-link-active {
  color: white;
}
</style>