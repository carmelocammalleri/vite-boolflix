<script>
import {store} from '../data/store'
import Star from './partials/Star.vue'

export default{
  name: 'Card',
  components:{
    Star
  },
  props:{
      title: String,
      type: String,
    },
    data(){
      return{
        store,
        flags:[ 'it', 'en']
      }
    },
    methods: {
      getImagePath(img){
        return new URL(`/public/image/${img}.png`, import.meta.url).href
      }
    }
}
</script>

<template>

<div class="container containerWrapper">
  <h1>{{title}}</h1>
  <div class="row row-cols-5">

    <!-- Card contenente i vari film -->
    <div class="card my-1" 
        v-for="film in store[type]" 
        :key="film.id">
        <div class="card-body d-none">

          <!-- lingua inserita -->
          <h4 class="card-title">{{ film.title || film.name }}</h4>
          <p class="card-title text-decoration-underline ">{{film.original_title || film.original_name }}</p>
  
          <div v-if="flags.includes(film.original_language)">
            <img class="flag" :src="getImagePath(film.original_language)" alt="">
            <span class="card-text"> {{ film.original_language }} </span>
          </div>
  
          <div v-else>
            <img class="flag" src="/public/image/uknown.png" alt="">
            <span class="card-text"> {{ film.original_language }}</span>
          </div>

            <Star :vote="film.vote_average"/>     
          <!-- /lingua inserita -->
          
        </div>
        <div class="posters">
          <img 
            class="imagePoster" 
            :src="`https://image.tmdb.org/t/p/w342/${film.poster_path}`" 
            alt="{{ film.poster_path }}"
            v-if="film.poster_path">
            <img 
              class="imagePoster" 
              v-else src="https://i.pinimg.com/736x/47/21/d6/4721d63c03ee90875e960572d8a676f8.jpg" alt="">
        </div>
    </div>
  </div>
</div>

</template>

<style lang="scss">
  @use '../scss/partials/card.scss';

</style>
