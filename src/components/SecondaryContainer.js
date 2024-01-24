import React from 'react';
import MovieList from './MovieList';
import MovieCard from './MovieCard';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className='bg-black relative overflow-hidden'>
      <div className='pl-12 relative z-20'>
        <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies} />
        <MovieList title={'Top Rated'} movies={movies.topRatedMovies} />
        <MovieList title={'Popular'} movies={movies.popularMovies} />
        <MovieList title={'Upcoming'} movies={movies.upcomingMovies} />
      </div>

      {/* MovieCard Component */}
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30'>
        <MovieCard />
      </div>
    </div>
  );
};

export default SecondaryContainer;