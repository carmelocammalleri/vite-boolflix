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
        <p class="text-uppercase ">{{ film.title }}</p>
        <p class=" text-decoration-underline ">{{film.original_title}}</p>
        <p>Lingua: {{film.original_language}}</p>
        <p>Voto Community: {{film.vote_average}}</p>
        <img :src="`https://image.tmdb.org/t/p/${film.poster_path}`" alt="">

    </div>
    
  </div>

</template>

<style>

</style>