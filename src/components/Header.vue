<script>
  import { store } from '../data/store';

  export default {
    name: 'Header',
    data(){
      return {
        store
      }
    }
  }
</script>

<template>
  <header class="d-flex justify-content-between align-items-center fixed-top ">
    <!-- LOGO -->
    <div id="logo">
      <img src="/image/logo-boolflix.png" alt="logo-boolflix">
    </div>

    <!-- SEARCHBARR -->
    <nav class="searchBarr">

      <!-- input -->
      <input @keyup.enter="$emit('filmSearched')" v-model="store.apiParams.query" type="text" placeholder="Cerca il titolo...">

      <!-- select -->
      <!-- <select name="selectionType" id="">
        <option value="film">film</option>
        <option value="serie">serie</option>
        <option value="tutto">tutto</option>
      </select> -->
    </nav>
  </header>

</template>

<style lang="scss">
  @use '../scss/header.scss';
</style>
