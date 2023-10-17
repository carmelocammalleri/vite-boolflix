<script>
   import Header from './components/Header.vue';
   import Main from './components/Main.vue';
   import { store } from './data/store';
   import axios from 'axios';

   export default {
    name: 'App',
     components: {
      Header,
       Main
     },
     data(){
       return {
         store,
         message: 'Scegli un film da vedere...',
         query: ''
       }
     },
     methods:{
      //API movie and tv con il parametro della funzione che cambia al variare delle info che cerchiamo
       getApi(type){
         axios.get(store.apiUrl + type, {
           params: store.apiParams
         })

         //Condizione con la quale studio gli elementi nell'array
         .then(res => {
             if(store[type].lenght=== 0){
              this.message= 'nessun film trovato'
            }else{
              store[type]= res.data.results
              console.log(res.data.results);
            }
          })
       },
       sendSearch(){
         this.getApi('movie')
         this.getApi('tv')
       }
      },
      mounted(){
 
      }
     }
    
 
</script>

<template>

<Header @filmSearched="sendSearch"/>
<Main v-if="store.movie.length>0" title="Film" type="movie"/>
<Main v-if="store.tv.length>0" title="Serie TV" type="tv"/>
<h2 v-else>{{message}}</h2>

</template>

<style lang="scss">
   @use './scss/main.scss';
</style>
