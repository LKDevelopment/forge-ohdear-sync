import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);
const state = {
    ohdear_api_key: null,
    ohdear_team_id: null,
    forge_api_key: null,
    loading: false,
}

const mutations = {
    setOhDearApiKey(state, {api_key}) {
        state.ohdear_api_key = api_key;
    },
    setOhDearTeamId(state, {team_id}) {
        state.ohdear_team_id = team_id;
    },
    setForgeApiKey(state, {api_key}) {
        state.forge_api_key = api_key;
    },
    startLoading(state) {
        state.loading = true;
    },
    stopLoading(state) {
        state.loading = false;
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters: {
        isLoading({loading}) {
            return !!loading
        },
        ohdearApiKey({ohdear_api_key}){
            return ohdear_api_key;
        }
    }
})