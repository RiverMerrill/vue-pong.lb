<template>
  <nav class="navbar is-warning" role="navigation" aria-label="navigation">
    <div class="navbar-brand">
      <div class="navbar-item">
        <h1>ALLATA-PONG</h1>
      </div>
      <div class="navbar-start">
          <a class="navbar-item">
            <router-link to="/">
                Leaderboard
            </router-link>
          </a>
          <a class="navbar-item">
            <router-link to="/match">
                Add Match
            </router-link>
          </a>
          <a class="navbar-item">
            <router-link to="/addplayer">
                Add Player
            </router-link>
          </a>
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
<style>
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
  a, a:visited {
    color: rgb(63, 63, 63);
  }
  nav{
    margin-bottom: 3%;
  }
  h1{
    font-weight: bold;
    font-size: 20pt;
  }
</style>
