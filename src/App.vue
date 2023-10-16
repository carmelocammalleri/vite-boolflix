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
      getApi(){
        axios.get(store.apiUrl,{
          params:{
            query:store.filmToSearch
          }
        })
        .then(res => {
          store.filmsList= res.data.results
          console.log(res.data.results);

        })
      }
    },
    mounted(){
      this.getApi()
    }
  }

</script>

<template>
 <Header @filmSearched="getApi"/>
 <Main/>
</template>

<style lang="scss">
  @use './scss/main.scss';
</style>
