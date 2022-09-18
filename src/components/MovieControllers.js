import React from 'react'
import {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const MovieControllers = ({movie, type}) => {
  const {removeMovieFromWatchList} = useContext(GlobalContext)
  const {addMovieToWatched} = useContext(GlobalContext)

  return (
      <div className='btns'>
            {type === 'watchlist' && (
                <>
                    <button onClick={() => addMovieToWatched(movie)}>
                        add
                    </button>
                    <button onClick={() => removeMovieFromWatchList(movie.id)} >
                       remove
                    </button>
                </>
            )}
      </div>
  )
}

export default MovieControllers
