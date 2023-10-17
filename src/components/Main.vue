<script>
  import { store } from '../data/store';

  export default {
    name: 'Main',
    props:{
      title: String,
      type: String
    },
    data(){
      return{
        store
      }
    }
  }
</script>

<template>
  <div class="container">
    <h1>{{title}}</h1>
    <div class="row row-cols-4">

      <div class=" card" 
          v-for="film in store[type]" 
          :key="film.id">
          <div class="card-body">
            <h3 class="card-title">{{ film.title || film.name }}</h3>
            <p class="card-title text-decoration-underline ">{{film.original_title || film.original_name }}</p>
    
            <div v-if="film.original_language === 'en'">
              <img src="/public/image/en.png" alt="">
              <span class="card-text"> {{ film.original_language }} </span>
            </div>
    
            <div v-else-if="film.original_language === 'it'">
              <img  src="/public/image/it.png" alt="">
              <span class="card-text"> {{ film.original_language }}</span>
    
            </div>
            <div v-else>
              <img src="/public/image/uknown.png" alt="">
              <span class="card-text"> {{ film.original_language }}</span>
            </div>
            <span class="card-text">Voto Community: {{film.vote_average}}</span>
            
          </div>
          <img :src="`https://image.tmdb.org/t/p/${film.poster_path}`" alt="">
      </div>
      
    </div>

  </div>
  

</template>

<style lang="scss">
  div>img{
    width: 30px;
    margin-right: 5px;
  }

</style>