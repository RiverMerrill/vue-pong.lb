<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home.vue';
import AddPlayer from './components/AddPlayer.vue';
import Match from './components/Match.vue';
import Header from './components/Header.vue';

export default {
  name: 'app',
  components: {
    Home,
    AddPlayer,
    Match,
    Header
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
}
.label {
  text-align: left !important;
}
</style>
