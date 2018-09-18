
<template>
    <div class="container">
        <h1>Winner:</h1>
      <div class="columns">
        <b-field class="column" label="Name:">
            <b-select v-model="winner.id" placeholder="Player Name">
              <option 
                v-for="player in winnerPlayers"
                :value="player.id"
                :key="player.id" v-if="player.id !== loser.id">
                {{player.fullName}}
              </option>
            </b-select>
        </b-field>
        <b-field label="Points:" class="column">
          <b-input type="number" v-model="winner.points"></b-input>
        </b-field>
        <b-field label="Pin:" class="column">
          <b-input type="password" maxlength="4" v-model="winner.pin"></b-input>
        </b-field>
        </div>
        <hr>
        <h1>Loser:</h1>
        <div class="columns">
        <b-field class="column" label="Name:">
            <b-select v-model="loser.id" placeholder="Player Name">
              <option 
                v-for="player in loserPlayers"
                :value="player.id"
                :key="player.id" v-if="player.id !== winner.id">
                {{player.fullName}}
              </option>
            </b-select>
        </b-field>
        <b-field label="Points:" class="column">
          <b-input type="number" v-model="loser.points"></b-input>
        </b-field>
        <b-field label="Pin:" class="column">
          <b-input type="password" maxlength="4" v-model="loser.pin"></b-input>
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
          winnerPlayers: [],
          loserPlayers: [],
          allPlayers: []
      }
   },
  methods: {
    addMatch: function() {
      axios.post('http://10.0.0.245:4200/addMatch', {winner: this.winner, loser: this.loser}).then(res => {
        console.log(res);
        this.$router.push('/');
      }, err => {
        console.log(err);
      })
    }
  },
  mounted() {
      axios.get('http://10.0.0.245:4200/getLeaderboard').then(res => {
          this.allPlayers = res.data
          this.allPlayers.forEach(player => {
            player.fullName = player.firstName + ' ' + player.lastName;
          })
          this.winnerPlayers = this.allPlayers;
          this.loserPlayers = this.allPlayers;
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
