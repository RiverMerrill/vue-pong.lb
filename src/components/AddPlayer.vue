<template>
    <div class="container">
      
      <div class="columns">
        <b-field class="column" label="First Name">
            <b-input v-model="firstName"></b-input>
        </b-field>
        <b-field class="column" label="Last Name">
            <b-input v-model="lastName"></b-input>
        </b-field>
      </div>
      <button v-on:click="addPlayer" class="button is-large is-warning">Add Player</button>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddPlayer",
  data() {
    return {
      players: [],
      firstName: "",
      lastName: ""
    };
  },
  methods: {
    addPlayer: function() {
      axios.post('http://localhost:4200/addPlayer', {firstName: this.firstName, lastName: this.lastName}).then(data => {
        this.$router.push('/');
      })
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
