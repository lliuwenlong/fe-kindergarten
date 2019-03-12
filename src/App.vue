<template>
  <div id="app">
    {{count}}
    <button @click="add">addCount</button>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios';
import {mapState, mapMutations} from 'vuex';
export default {
  name: 'App',
   computed:{
      ...mapState(['count'])
  },
  methods: {
    ...mapMutations({add: 'ADD_COUNT'})
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
