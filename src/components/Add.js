import React, { useEffect } from 'react'
import { useState } from 'react'
import ResultCard from './ResultCard';

const Add = () => {
  const [valueI, setValueI] = useState('');
  const [movies, setMovies] = useState([])
  const changeInput = (e) => {
    setValueI(e.target.value)
  }

  const fetchData = async() => {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=89e0c416b381a21455107c4864850c1c&language=en-US&page=1&include_adult=false&query=${valueI}`
      const res = await fetch(url);
      const data = await res.json();
      const {results} = data
      results.map((movie) => {
      const {id, poster_path, title, overview, release_date} = movie
      })
      setMovies(results)
      console.log(movies);
  }

  useEffect(() => {
    fetchData()
  }, [valueI])


  return (
    <div className='add-page'>
        <div className="container">
            <div className="add-content">
                <div className="input-wrapper">
                    <input type="text" placeholder='search for a movie' value={valueI} onChange={changeInput}/>
                </div>
                {movies.length > 0 && (
            <ul className="results">
              {movies.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
            </div>
        </div>
    </div>
  )
}

export default Add
