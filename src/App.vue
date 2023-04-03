<template>
   <form @submit.prevent="search()">
    <input type="text" v-model="searchText" placeholder="Type any music name" />
    <button>Search</button>
    <div v-if="data.results">
      <div v-for="album in data.results" :key="album.artistId">
        <AlbumsComp :album="album" />
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AlbumsComp from './components/AlbumsComp.vue'
import iTunesAPI from './services/iTunesAPI'
import { ItunesTypes } from './types/ItunesTypes.interface';

export default defineComponent({
  name: 'App',
  components: {
    AlbumsComp
  },
  data() {
    return {
      data: {} as ItunesTypes,
      searchText: ""
    };
  },
  methods: {
    async search() {
    try {
        const response = await iTunesAPI.getItunesData(this.searchText);
        this.data = response.data;
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
      this.searchText = '';
}}
})
</script>

<style>
body {
  text-align:center;
}
</style>
