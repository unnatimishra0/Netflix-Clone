import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";


const useNowPlayingMovies=()=>{

    //fetch data from TMDB api and update store 
  const dispatch=useDispatch();
//memoization -if already there in redux store dont make an api call
  const nowPlayingMovies=useSelector(store=> store.movies.nowPlayingMovies)
  const getNowPlayingMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',
    API_OPTIONS)
    const json= await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results))
    //in your local host u will see api is called twice it is because of the ReactStrictmode used in appp.js
    // it is called two times as react make some extra renders to check that there may not be inconsistency between calling 
    //..when we build to production it will be called once only.
  }

  useEffect(()=>{
    //memoization -if already there in redux store dont make an api call

    if(!nowPlayingMovies)
    getNowPlayingMovies();
  },[])
}
export default useNowPlayingMovies;