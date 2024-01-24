import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomimgMovies";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";

const Browse = () => {
  const showGpt = useSelector((store) => store.gpt.showGpt);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {showGpt ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/* {
        MainContainer
          -VideoBackground
          -VideoTitle
        Secondary Container
          -MoviesList * n
           -cards *n
      } */}
    </div>
  );
};

export default Browse;
