import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";

export const WatchList = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">

        <div className="header">
          <h1 className="heading">
            My WatchList
          </h1>
        </div>

        {watchlist.length > 0 ? (          
        <div className="movie-grid">
          {watchlist.map((movie) =>(
              <MovieCard  key={movie.id} movie={movie} type="watchlist"/>
            ))}
        </div>
        ) :
        (
          <h2 className="no-movies">
            No movies in your list
          </h2>
        )}

      
      </div>
    </div>
  );
};