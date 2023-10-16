<script>
  export default {
    name: 'Header'
  }
</script>

<template>
  <input v-model="filmToSearch" type="text" placeholder="Cerca il titolo...">
  <select name="selectionType" id="">
    <option value="film">film</option>
    <option value="serie">serie</option>
    <option value="tutto">tutto</option>
  </select>

</template>

<style>

</style>
