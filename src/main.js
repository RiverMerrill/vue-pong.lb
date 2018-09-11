import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Buefy from 'buefy';
import Home from './components/Home';
import AddPlayer from './components/AddPlayer';
import Match from './components/Match';
import 'buefy/lib/buefy.css';

Vue.use(Buefy);
Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  {path: '/', component: Home},
  {path: '/addPlayer', component: AddPlayer},
  {path: '/Match', component: Match}
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  http: {
    root: '/'
  },
  router
}).$mount('#app')

