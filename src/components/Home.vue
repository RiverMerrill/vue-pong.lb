<template>
  <b-table :data="leaderBoard" :columns="columns" default-sort="rank" :default-sort-direction="'desc'">
  </b-table>
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
          label: 'First Name',
          sortable: true
        },
        {
          field: 'lastName',
          label: 'Last Name',
          sortable: true
        },
        {
          field: 'points',
          label: 'Points',
          sortable: true
        },
        {
          field: 'wins',
          label: 'Wins',
          sortable: true
        },
        {
          field: 'losses',
          label: 'Losses',
          sortable: true
        },
        {
          field: 'rank',
          label: 'Rank',
          sortable: true
        }
      ]
    };
  },
  mounted() {
    axios({ method: "GET", url: "http://10.0.0.245:4200/getLeaderboard" }).then(
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
