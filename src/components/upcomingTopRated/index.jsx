import { MoviesCards } from "../../moviesCard"
import { useState, useEffect } from "react"

export const UpcomingTopRated = ({searchCategory}) => {

   const [movies , setMovies] = useState([])

 useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${searchCategory}?api_key=ae186e957330197b5106a6c66c8bd1df&language=en-US&page=1`)
    .then(res=>res.json())
    .then(data=>setMovies(data.results))
 },[])
 

    return (
      <>
        {movies.map(movie=>{
        return(
          <MoviesCards
            searchCategory = {searchCategory}
            key = {movie.id}
            alt = {movie.title} 
            movieTitle = {movie.title}
            movieDetails = {movie.overview}
            img = {movie.poster_path}
          />)
      })}
      </>
 
    )
}

