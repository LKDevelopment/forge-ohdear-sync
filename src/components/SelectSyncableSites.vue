<template>
  <div>
    <div class="bg-red-lightest border-t-4 border-red rounded-b text-red-darkest px-4 py-3 shadow-md mb-2" role="alert"
         v-if="error != null">
      <div class="flex">
        <div class="py-1">
          <svg class="fill-current h-6 w-6 text-red mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path
              d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
          </svg>
        </div>
        <div>
          {{ error }}
        </div>
      </div>
    </div>
    <div class="bg-teal-lightest border-t-4 border-teal rounded-b text-teal-darkest px-4 py-3 shadow-md" role="alert" v-if="!done">
      <div class="flex">
        <div class="py-1">
          <svg class="fill-current h-6 w-6 text-teal mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
          </svg>
        </div>
        <div>
          <p class="font-bold">Give me some time!</p>
          <p class="text-sm">I will get your Forge Sites and compare them against your OhDear Sites..</p>
        </div>
      </div>
    </div>
    <div class="bg-teal-lightest border-t-4 border-teal rounded-b text-teal-darkest px-4 py-3 shadow-md" role="alert" v-else>
      <div class="flex">
        <div class="py-1">
          <svg class="fill-current h-6 w-6 text-teal mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
          </svg>
        </div>
        <div>
          <p class="font-bold">Now you can add any of your sites!</p>
          <p class="text-sm">If you are ready - just close this tab!</p>
        </div>
      </div>
    </div>
    <div v-for="site in sites" :key="site.id" class="w-full">
      <sync-site :site="site"></sync-site>
    </div>

  </div>
</template>

<script>
  import ForgeApi from './../apis/forge_api';

  import OhDearApi from './../apis/ohdearapi';

  export default {
    name: "select-syncable-sites",
    data() {
      return {
        sites: [],
        error: null,
        ohdear_sites: [],
        done:false
      }
    },
    mounted() {
      this.$store.commit('startLoading');
      this.getOhDearSites();
      this.getSites();

    },
    methods: {
      getOhDearSites() {
        OhDearApi.sites().then((response) => {
          response.data.data.forEach((site, k) => {
            this.ohdear_sites.push(site.sort_url);
          })
        });
      },
      getSites() {
        ForgeApi.servers().then((response) => {

          response.data.servers.forEach((value, key) => {
            ForgeApi.sites(value.id).then((_response) => {
              if (_response.data.sites.length > 0) {
                _response.data.sites.forEach((site, key) => {
                  if (site.name != 'default' && this.ohdear_sites.indexOf(site.name) == -1) {
                    this.sites.push({
                      name: site.name,
                      id: site.id
                    });
                  }
                });
              }
            });
          });
          this.$store.commit('stopLoading');
          this.done = true;
        });

      }
    }
  }
</script>

<style scoped>

</style>
