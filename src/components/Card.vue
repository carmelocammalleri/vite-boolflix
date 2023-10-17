<script>
import {store} from '../data/store'

export default{
  name: 'Card',
  props:{
      title: String,
      type: String,
      image: Object
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

    <!-- Card contenente i vari film -->
    <div class=" card" 
        v-for="film in store[type]" 
        :key="film.id">
        <div class="card-body">

          <!-- lingua inserita -->
          <h3 class="card-title">{{ film.title || film.name }}</h3>
          <p class="card-title text-decoration-underline ">{{film.original_title || film.original_name }}</p>
  
          <div v-if="film.original_language === 'en'">
            <img class="flag" src="/public/image/en.png" alt="">
            <span class="card-text"> {{ film.original_language }} </span>
          </div>
  
          <div v-else-if="film.original_language === 'it'">
            <img class="flag" src="/public/image/it.png" alt="">
            <span class="card-text"> {{ film.original_language }}</span>
  
          </div>
          <div v-else>
            <img class="flag" src="/public/image/uknown.png" alt="">
            <span class="card-text"> {{ film.original_language }}</span>
          </div>
          <span class="card-text">Voto Community: {{film.vote_average}}</span>
          <!-- /lingua inserita -->
          
        </div>
        <img 
          class="imagePoster" 
          :src="`https://image.tmdb.org/t/p/w342/${film.poster_path}`" 
          alt="{{ film.poster_path }}"
          v-if="film.poster_path">
          <img v-else src="https://i.pinimg.com/736x/47/21/d6/4721d63c03ee90875e960572d8a676f8.jpg" alt="">
    </div>
  </div>
</div>

</template>

<style lang="scss">
   .card .flag{
    width: 30px;
    margin-right: 5px;
  }
</style>
