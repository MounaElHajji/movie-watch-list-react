import { useContext } from "react"
import { GlobalContext } from '../context/GlobalState'

const ResultCard = ({movie}) => {
   
  const { addMovieToWatchList, addMovieToWatched, watchlist, watched } = useContext(GlobalContext)   
  //we need to make sure that the movie is already in the watched list so it won't be added twice
  let storedMovie = watchlist.find(obj => obj.id === movie.id)
  let watchedMovies = watched.find(obj => obj.id === movie.id)
  const watchDisabled = storedMovie ? true : false //true means that there is an object id that's the same as the movie id, so in this case we return treu which meand disable the button
  //in the other hand, we will return false if the movie deos't exist
  const watchdisabled1 = watchedMovies ? true : false

  return (
     <div className="result-card">
        <h1></h1>
      <div className="poster-wrapper">
        {movie.poster_path ? ( 

        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" />
        ): (
          <div className="filter-poster"></div>
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">{movie.release_date}</h4>
        </div>

        <div className="controls">
          <button
          disabled={watchDisabled}
            className="btn"
           onClick={() => addMovieToWatchList(movie)}
          >
            Add to Watchlist
          </button>

          <button
            className="btn"
            onClick={() => addMovieToWatched(movie)}
            disabled= {watchdisabled1}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResultCard
