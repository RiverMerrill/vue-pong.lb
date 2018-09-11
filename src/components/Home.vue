<template>
  <b-table :data="leaderBoard" :columns="columns"></b-table>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      leaderBoard: [],
      columns: [
        {
          field: 'firstName',
          label: 'First Name'
        },
        {
          field: 'lastName',
          label: 'Last Name'
        },
        {
          field: 'points',
          label: 'Points'
        },
        {
          field: 'wins',
          label: 'Wins'
        },
        {
          field: 'losses',
          label: 'Losses'
        }
      ]
    };
  },
  mounted() {
    axios({ method: "GET", url: "http://localhost:4200/getLeaderboard" }).then(
      res => {
        this.leaderBoard = res.data;
      }
    );
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
</style>
