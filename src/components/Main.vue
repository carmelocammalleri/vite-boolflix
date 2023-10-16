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
        :key="index">
        <p>{{ film.title }}</p>
        <p>{{film.original_title}}</p>
        <p>{{film.original_language}}</p>
        <p>{{film.vote_average}}</p>
        <img :src="`https://image.tmdb.org/t/p/${film.poster_path}`" alt="">

    </div>
    
  </div>

</template>

<style>

</style>