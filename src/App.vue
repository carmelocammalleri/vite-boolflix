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
         store
       }
     },
     methods:{
       getApi(type){
         axios.get(store.apiUrl + type, {
           params: store.apiParams
         })
         .then(res => {
           store[type]= res.data.results
           console.log(res.data.results);
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
 <Main title="Film" type="movie"/>
 <Main title="Serie TV" type="tv"/>
</template>

<style lang="scss">
   @use './scss/main.scss';
</style>
