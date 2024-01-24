import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constant"
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const usePopularMovies=()=>{

    const dispatch=useDispatch();
  //memoization -if already there in redux store dont make an api call

    const popularMovies=useSelector(store=> store.movies.popularMovies);


    const getPopularMovies=async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
        const json= await data.json();

        dispatch(addPopularMovies(json.results))

    }
    useEffect(()=>{
  //memoization -if already there in redux store dont make an api call

       ! popularMovies && getPopularMovies();
    },[])
}
export default usePopularMovies;