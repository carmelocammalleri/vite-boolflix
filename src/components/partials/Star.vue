<script>
export default {
  name: 'Star',
  props:{
    vote: Number
  },
  computed:{
    rating(){
      return Math.ceil(this.vote / 2)
    }
  }
}

</script>

<template>
  <div class="card-text">
    <span>Voto: {{rating}}</span> <br>
    <i
      v-for="i in 5"
      :key="i"
      class="fa-star"
      :class="(i<= rating) ? 'fa solid' : 'fa-regular'"></i>
  </div>

</template>