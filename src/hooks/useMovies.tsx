import { useEffect, useState } from "react"
import movieDB from '../api/MovieDb';
import { MovieDBResponse, Movie } from '../interfaces/movieInterface';

interface MoviesStates{
  nowPlaying:Movie[],
  popular:Movie[],
  topRated:Movie[],
  upcoming:Movie[]
}
export const useMovies = () => {

    const [isLoading,setIsLoading] = useState<Boolean>(true)
    const [moviesStates,setMoviesState] = useState<MoviesStates>({
      nowPlaying:[],
      popular:[],
      topRated:[],
      upcoming:[]
    })

const getMovies = async() =>{
     
    const now_playingPromise = movieDB.get<MovieDBResponse>('/now_playing')
    const popularPromise = movieDB.get<MovieDBResponse>('/popular')
    const top_ratedPromise = movieDB.get<MovieDBResponse>('/top_rated')
    const upcomingPromise = movieDB.get<MovieDBResponse>('/upcoming')

    const response = await Promise.all([now_playingPromise,popularPromise,top_ratedPromise,upcomingPromise])

    setMoviesState({
      nowPlaying:response[0].data.results,
      popular:response[1].data.results,
      topRated:response[2].data.results,
      upcoming:response[3].data.results
    })
    
    setIsLoading(false)
}
useEffect(() => {
  getMovies()
}, [])
  
  return {
  ...moviesStates,
  isLoading
  }
}
