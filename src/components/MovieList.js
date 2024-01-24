import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="px-6" >
      <h1 className="font-bold text-3xl py-6 text-white">{title}</h1>

      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies &&
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          {/* {movies.map(movie=>                <MovieCard posterPath={movies[0].poster_path}/>

)} */}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
