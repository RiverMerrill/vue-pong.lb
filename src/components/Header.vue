<template>
  <nav class="navbar is-warning" role="navigation" aria-label="navigation">
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/">
          <a class="navbar-item">Leaderboard</a>
        </router-link>
        <router-link to="/match">
          <a class="navbar-item">Add Match</a>
        </router-link>
        <router-link to="/addplayer">
          <a class="navbar-item">Add Player</a>
        </router-link>
      </div>
  </div>
</nav>
</template>

<script>
import axios from "axios";

export default {
  name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
</style>
