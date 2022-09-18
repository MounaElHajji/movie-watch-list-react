import React, {createContext, useReducer, useEffect} from 'react'
import AppReducer from './AppReducer'
//we define states in the context so we can access it from anywhere in our components
//instead of defining the watched ans watchedList in the components itself, we can define it in the global state
const initialState = {
   watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
}

//we create the context here, and we use it in whatever component we want
//create context
export const GlobalContext = createContext(initialState) //this is the state that we want to use globally in all the data


//we build a store that stores all our data
//the reducer is a function that return some state data. It describes how a state is trnsferred into the next state
//the reducer tells us also how to store a data inside the store

//The useReducer Hook accepts two arguments. The reducer function
//contains your custom state logic and the initialState can be a simple value but generally will contain an object.
//The useReducer Hook returns the current state and a dispatch method.
//useReducer returns an array that holds the current state value and a dispatch function to which you can pass an action and later invoke it.
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

//actions, the implementation of these actoins will be in the AppReducer
//the actions that will helps us to do something when we click on the buttons 
//we dispatch the type in here and then we're calling it in the appReducer
const addMovieToWatchList  = (movie) => {
dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload: movie}) //we dispatcj a type of a movei to watch list
}

const addMovieToWatched = (movie) => {
    dispatch({type: "ADD_MOVIE_TO_WATCHED", payload:movie})
}

const removeMovieFromWatchList = (id) => {
  dispatch({type: "REMOVE_MOVIE_FROM_WATCHLIST", payload:id})
}

   return (
    <GlobalContext.Provider value={{ watchlist: state.watchlist, 
    watched: state.watched, 
    addMovieToWatchList, 
    addMovieToWatched,
    removeMovieFromWatchList  }}>
        {props.children}
    </GlobalContext.Provider>
   )
}