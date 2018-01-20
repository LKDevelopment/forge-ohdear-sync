import axios from 'axios';
import store from './../api_token_store'; // path to your Vuex store

export default {
  _get(method) {
    return axios.get(
      `https://proxy.lkdev.co/api/` + method,
      {
        headers: {
          Authorization: 'Bearer ' + store.getters.ohdearApiKey
        }
      })
  },
  _post(method, data) {
    return axios.post(
      `https://proxy.lkdev.co/api/` + method, data,
      {
        headers: {
          Authorization: 'Bearer ' + store.getters.ohdearApiKey
        }
      })
  },
  me() {
    return this._get('me');
  },
  sites() {
    return this._get('sites');
  },
  addSite(url){
    return this._post('sites',{url:url,team_id: store.getters.ohdearTeamId})
  }

}
