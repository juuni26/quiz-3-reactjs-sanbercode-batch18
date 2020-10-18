import React from "react";
import { MovieListProvider } from "./MovieListContext";
import MovieList from "./MovieList";
import MovieForm from "./MovieForm";
import MovieSearch from "./MovieSearch";



const MovieListEditor = () => {
  return (
    <MovieListProvider>
      <div className="movieListEditor">
        <MovieSearch />
        <MovieList />
        <MovieForm />
      </div>
    </MovieListProvider>
  );
};

export default MovieListEditor;
