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
  <div>

    <input @keyup.enter="$emit('filmSearched')" v-model="store.apiParams.query" type="text" placeholder="Cerca il titolo...">
    <select name="selectionType" id="">
      <option value="film">film</option>
      <option value="serie">serie</option>
      <option value="tutto">tutto</option>
    </select>
  </div>

</template>

<style>

</style>
