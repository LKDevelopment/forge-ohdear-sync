<template>
  <div class="m-4 card border p-2">
    <select v-model="protocol" class="shadow appearance-none border rounded w-1\/3 py-2 px-3 text-grey-darker"
            :readonly="!loading">
      <option value="http">http://</option>
      <option value="https">https://</option>
    </select>
    <input class="shadow appearance-none border rounded py-2 px-3 text-grey-darker" v-model="url" :readonly="!loading">
    <span v-if="done == false && error == null">
      <i class="fas fa-spin fa-spinner text-grey" v-if="loading == true"></i>
      <button class="bg-green hover:bg-green-dark text-white font-bold py-2 px-4 rounded" v-on:click="addToOhDear"
              v-if="loading == false && sending == false">Add to Ohdear!
      </button>
    </span>
    <i class="fas fa-check text-green" v-if="done == true && error == null"></i>
    <span v-if="error != null" class="text-red">
      <i class="fas fa-times text-danger"></i> {{ error }}
   </span>

  </div>
</template>

<script>
  import axios from 'axios';
  import OhDearApi from './../apis/ohdearapi';

  export default {
    name: "sync-site",
    props: ['site'],
    data() {
      return {
        protocol: 'http',
        url: null,
        loading: true,
        sending: false,
        done: false,
        error: null
      }
    },
    mounted() {
      this.url = this.siteUrl;
      this.checkProtocol();
    },
    computed: {
      siteUrl() {
        return this.site.name;
      }
    },
    methods: {
      checkProtocol() {
        axios.get('https://' + this.siteUrl).then((success) => {
          this.protocol = 'https';
        }, (error) => {
          if (error.message.indexOf('Network Error') === -1) {
            this.protocol = 'http';
          } else {
            this.protocol = 'https';
          }
        })
        this.loading = false;
      },
      addToOhDear() {
        this.loading = true;
        this.sending = true;
        OhDearApi.addSite(this.protocol + '://' + this.url).then((response) => {
          this.loading = false;
          if (response.data.message == undefined) {
            this.done = true;
          } else {
            this.loading = false;
            this.error = response.data.message;
          }
        }, (error) => {
          this.loading = false;
          this.error = error.message;
        });

      }
    }
  }
</script>

<style scoped>

</style>
