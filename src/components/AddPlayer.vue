<template>
    <div class="container">
      <h1>Add a Player:</h1>
      <div class="columns">
        <b-field class="column" label="First Name">
            <b-input v-model="firstName"></b-input>
        </b-field>
        <b-field class="column" label="Last Name">
            <b-input v-model="lastName"></b-input>
        </b-field>
        <b-field class="column" label="4 Character Pin">
            <b-input maxlength="4" type="password" v-model="pin"></b-input>
        </b-field>
      </div>
      <button v-on:click="addPlayer" class="button is-large is-warning">Add Player</button>
      <p v-if="error">ERROR: Please enter a valid pin</p>
      <p v-if="playerExists">ERROR: Player already exists.  Try again.</p>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddPlayer",
  data() {
    return {
      players: [],
      firstName: '',
      lastName: '',
      pin: '',
      error: false,
      playerExists: false
    };
  },
  methods: {
    addPlayer: function() {
      if (this.pin.length < 4) {
        this.error = true;
      } else{
        axios.post('http://10.0.0.245:4200/addPlayer', {firstName: this.firstName, lastName: this.lastName, pin: this.pin}).then(data => {
          this.$router.push('/');
        }, err => {
          this.playerExists = true;
        })
      }
    }
  }
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
a {
  color: #42b983;
}
.container {
  margin-left: auto;
  margin-right: auto;
}
</style>
