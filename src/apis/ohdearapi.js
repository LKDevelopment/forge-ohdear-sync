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
  me() {
    return this._get('me');
  },
  sites() {
    return this._get('sites');
  }

}
