import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params:{
      api_key: '6f8d7eb3da474fa3f1d95767a5048d0c',
      language: 'es-ES'
    }
})
export default movieDB