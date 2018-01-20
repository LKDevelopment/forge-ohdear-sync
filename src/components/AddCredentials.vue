<template>
    <div>
        <div class="bg-red-lightest border-t-4 border-red rounded-b text-red-darkest px-4 py-3 shadow-md mb-2" role="alert" v-if="error != null">
            <div class="flex">
                <div class="py-1">
                    <svg class="fill-current h-6 w-6 text-red mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
                    </svg>
                </div>
                <div>
                    {{ error }}
                </div>
            </div>
        </div>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="ohdear_api_key">
                    Please enter your Oh Dear API Key
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="ohdear_api_key" type="text" placeholder="OhDear API Key" v-model="ohdear_api_key">
            </div>
            <div v-if="ohdear_teams.length > 0">
                <div class="mb-6">
                    <label class="block text-grey-darker text-sm font-bold mb-2">
                        Please select your Team
                    </label>
                    <select class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" v-model="ohdear_team_id">
                        <option v-for="team in ohdear_teams" :key="team.id" :value="team.id">{{ team.name }}</option>
                    </select>
                </div>
                <div v-if="ohdear_team_id != null">
                    <div class="mb-4">
                        <label class="block text-grey-darker text-sm font-bold mb-2" for="ohdear_api_key">
                            Please enter your Forge API Key
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="forge_api_key" type="text" placeholder="Forge API Key" v-model="forge_api_key">
                    </div>

                    <div class="flex items-center justify-between" v-if="forge_api_key != null">
                        <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button" v-on:click="goToSites">
                            Get your Forge Sites!
                        </button>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="flex items-center justify-between">
                    <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button" v-on:click="loadTeams" :disabled="isLoading">
                        Load Teams from Oh Dear!
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import OhDearApi from './../apis/ohdearapi';

    export default {
        name: 'AddCredentials',
        data() {
            return {
                ohdear_api_key: null,
                ohdear_teams: [],
                ohdear_team_id: null,
                forge_api_key: null,
                error: null
            }
        },
        methods: {
            loadTeams: function () {
                this.error = null;
                this.$store.commit('setOhDearApiKey', {api_key: this.ohdear_api_key});
                this.ohdear_teams = [];
                this.$store.commit('startLoading');
                OhDearApi.me().then((response) => {
                    if (response.data.error == undefined) {
                        this.ohdear_teams = response.data.teams.data;
                    } else {
                        this.error = response.data.error;
                    }
                    this.$store.commit('stopLoading');
                }, (error) => {
                    this.error = error.message;
                    this.$store.commit('stopLoading');
                });
            },
            goToSites: function () {
                this.$store.commit('setOhDearTeamId', {team_id: this.ohdear_team_id});
                this.$store.commit('setForgeApiKey', {api_key: this.forge_api_key});
                this.$router.push('select');
            }
        },
        computed: {
            isLoading() {
                return this.$store.getters.isLoading
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
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
