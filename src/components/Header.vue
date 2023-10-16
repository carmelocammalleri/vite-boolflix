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
  <input @keyup.enter="$emit('ciao')" v-model="store.filmToSearch" type="text" placeholder="Cerca il titolo...">
  <select name="selectionType" id="">
    <option value="film">film</option>
    <option value="serie">serie</option>
    <option value="tutto">tutto</option>
  </select>

</template>

<style>

</style>
