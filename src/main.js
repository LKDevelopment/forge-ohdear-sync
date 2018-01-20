// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false
Vue.use(VueRouter);
import store from './api_token_store';


import StartPage from './components/StartPage';
import AddCredentials from './components/AddCredentials'
import SelectSites from './components/SelectSyncableSites'
import SyncSite from './components/syncSite';

Vue.component(SyncSite);
const routes = [
  {path: '/', component: StartPage},
  {path: '/credentials', component: AddCredentials},
  {path: '/select', component: SelectSites}
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  router,
  store
})
