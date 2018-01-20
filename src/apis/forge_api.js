import axios from 'axios';
import store from './../api_token_store'; // path to your Vuex store

export default {
  _get(method) {
    return axios.get(
      `https://forge.laravel.com/api/v1/` + method,
      {
        headers: {
          Authorization: 'Bearer ' + store.getters.forgeApiKey,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      })
  },
  servers() {
    return this._get('servers');
  },
  sites(serverId) {
    return this._get('servers/' + serverId + '/sites');
  },

}
