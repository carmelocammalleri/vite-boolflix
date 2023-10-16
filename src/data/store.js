import {reactive} from 'vue'
export const store = reactive ({
  apiUrl:'https://api.themoviedb.org/3/search/movie?api_key=ed90eed6f9f0d435c220a5cac787b79e&query=dragonball&language=it-IT',
  filmsList:[],
  filmToSearch: null
})