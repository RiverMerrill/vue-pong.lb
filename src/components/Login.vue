<template>
    <div class="container">
      <h1>Please Login:</h1>
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
      <button v-on:click="login" class="button is-large is-warning">Login</button>
      <p class="error" v-if="loginError">Incorrect username or pasword.  Please try again.</p>
    </div>
</template>

<script>
import axios from "axios";
import { config } from "../../config.js"

export default {
  name: "AddPlayer",
  data() {
    return {
      firstName: '',
      lastName: '',
      pin: '',
      loginError: false
    };
  },
  methods: {
    login() {
      axios.post(config.ApiBaseUrl + '/login', {firstName: this.firstName, lastName: this.lastName, pin: this.pin}).then(data => {
        sessionStorage.setItem('user', JSON.stringify({firstName: this.firstName, lastName: this.lastName, pin: data.data}));
        this.$router.push('/');
      }, err => {
        this.loginError = true;
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
