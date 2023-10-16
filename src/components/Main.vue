<script>
  import { store } from '../data/store';

  export default {
    name: 'Main',
    data(){
      return{
        store
      }
    }
  }
</script>

<template>
  <div class="card">
    <div v-for="(film, index) in store.filmsList" 
        :key="index" 
        :nameObj="film.title"
        :imgObj="film.poster_path" 
        >
        <img src="" alt="">

    </div>
    
  </div>

</template>

<style>

</style>