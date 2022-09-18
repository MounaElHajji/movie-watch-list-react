//the reducer do the implementation of the function defined in the globalState
//and this implementation will be done by calling the dispatches
export default (state, action) => {
    //as we get more actions(an object to tell the reducer how to change the state), we despatch a type wchihc passe it to the reducer
    //every action will have a type 
    
    switch(action.type){
        case "ADD_MOVIE_TO_WATCHLIST":
            return {
                ...state, //the state is coming from the globalStae and which holds the watchlist as well as the watched
                watchlist: [action.payload, ...state.watchlist] //state.watchlist will ba added to the list of exisiting watchlist whcih are defined in the action.payload
            }
        
        case  "ADD_MOVIE_TO_WATCHED": 
            return {
                ...state,
                watchlist: state.watchlist.filter(
                (movie) => movie.id !== action.payload.id
                ),    
                watched: [action.payload, ...state.watched]
            }
        case "REMOVE_MOVIE_FROM_WATCHLIST" :
            return {
                ...state, //the state holds the variables watched and watchlist and we want to go throught them
                watchlist : state.watchlist.filter(movie => movie.id !== action.payload)
            }
        default:
            return state;
    }
}