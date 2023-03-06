<template>
  <div>
   <h2>Album Name: {{ album.collectionName }}</h2>
  <h4>Artwork</h4>
    <p>Artist Name: {{ album.artistName }}</p>
  <a :href="album.collectionViewUrl" target="blank">
    <img :src="album.artworkUrl100" alt="" />
  </a>
  <h4>Release Date: {{ album.releaseDate }}</h4>
  <h4>Price: {{ album.collectionPrice }}</h4>
  <hr>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Result } from "../types/ItunesTypes.interface";

export default defineComponent({
  name: 'HelloWorld',
  props: {
    album: {
      type: Object as PropType<Result>,
      required:true,
    }
  },
})
</script>
