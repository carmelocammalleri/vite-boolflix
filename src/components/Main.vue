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
        <p v-if="film.original_language === 'en'">
          <img src="/public/image/en.png" alt="">
        </p>
        <p v-else-if="film.original_language === 'it'">
          <img src="/public/image/it.png" alt="">
        </p>
        <p v-else>
          <img src="/public/image/uknown.png" alt="">
        </p>
        <p>Voto Community: {{film.vote_average}}</p>
        <img :src="`https://image.tmdb.org/t/p/${film.poster_path}`" alt="">

    </div>
    
  </div>

</template>

<style>

</style>