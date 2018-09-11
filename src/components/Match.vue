
<template>
    <div class="container">
        <h1>Winner:</h1>
      <div class="columns">
        <b-field class="column" label="Name:">
            <b-select v-model="winner.id" placeholder="Player Name">
              <option 
                v-for="player in players"
                :value="player.id"
                :key="player.id">
                {{player.fullName}}
              </option>
            </b-select>
        </b-field>
        <b-field label="Points:" class="column">
          <b-input v-model="winner.points"></b-input>
        </b-field>
        </div>
        <hr>
        <h1>Loser:</h1>
        <div class="columns">
        <b-field class="column" label="Name:">
            <b-select v-model="loser.id" placeholder="Player Name">
              <option 
                v-for="player in players"
                :value="player.id"
                :key="player.id">
                {{player.fullName}}
              </option>
            </b-select>
        </b-field>
        <b-field label="Points:" class="column">
          <b-input v-model="loser.points"></b-input>
        </b-field>
      </div>
      <button v-on:click="addMatch" class="button is-large is-warning">Add Match</button>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Match",
  data() {
      return {
          winner: {},
          loser: {},
          players: []
      }
   },
  methods: {
    addMatch: function() {
      axios.post('http://localhost:4200/addMatch', {winner: this.winner, loser: this.loser}).then(res => {
        console.log(res);
        this.$router.push('/');
      })
    }
  },
  mounted() {
      axios.get('http://localhost:4200/getLeaderboard').then(res => {
          this.players = res.data
          this.players.forEach(player => {
            player.fullName = player.firstName + ' ' + player.lastName;
          })
      })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  h1 {
    font-weight: bold;
    font-size: 20pt;
    margin-bottom: 2%;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .container {
    margin-left: auto;
    margin-right: auto;
  }
</style>
