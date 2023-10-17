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
    <div v-for="film in store.movie" 
        :key="film.id">
        <p class="text-uppercase ">{{ film.title }}</p>
        <p class=" text-decoration-underline ">{{film.original_title}}</p>

        <div v-if="film.original_language === 'en'">
          <img src="/public/image/en.png" alt="">
          <span> {{ film.original_language }} </span>
        </div>

        <div v-else-if="film.original_language === 'it'">
          <img  src="/public/image/it.png" alt="">
          <span> {{ film.original_language }}</span>

        </div>
        <div v-else>
          <img src="/public/image/uknown.png" alt="">
          <span> {{ film.original_language }}</span>
        </div>
        <p>Voto Community: {{film.vote_average}}</p>
        <img :src="`https://image.tmdb.org/t/p/${film.poster_path}`" alt="">

    </div>
    
  </div>

</template>

<style lang="scss">
  div>img{
    width: 30px;
    margin-right: 5px;
  }

</style>