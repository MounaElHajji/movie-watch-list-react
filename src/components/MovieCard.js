import React from "react";
import MovieControllers from "./MovieControllers";
const MovieCard = ({ movie, type }) => {
  return (
    <>
    <div className="movie-card">
      <div className="overlay"></div>

      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />  
    </div>
    
    <MovieControllers type={type} movie={movie}/>    
    </>

  );
};

export default MovieCard