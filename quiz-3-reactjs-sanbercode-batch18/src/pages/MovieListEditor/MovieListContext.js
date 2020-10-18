import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const MovieListContext = createContext();

export const MovieListProvider = (props) => {
  const [movieList, setMovieList] = useState(null);

  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputYear, setInputYear] = useState(2020);
  const [inputDuration, setInputDuration] = useState(120);
  const [inputGenre, setInputGenre] = useState("");
  const [inputRating, setInputRating] = useState(0);
  const [inputImageUrl, setInputImageUrl] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const [edit, setEdit] = useState(false);
  const [idEdit, setEditId] = useState(0);



  const contextItems = {
    movieList: movieList,
    setMovieList: setMovieList,

    inputTitle: inputTitle,
    setInputTitle: setInputTitle,

    inputDescription: inputDescription,
    setInputDescription: setInputDescription,

    inputYear: inputYear,
    setInputYear: setInputYear,

    inputDuration: inputDuration,
    setInputDuration: setInputDuration,

    inputGenre: inputGenre,
    setInputGenre: setInputGenre,

    inputRating: inputRating,
    setInputRating: setInputRating,

    inputImageUrl: inputImageUrl,
    setInputImageUrl: setInputImageUrl,

    inputSearch: inputSearch,
    setInputSearch: setInputSearch,

    searchResult: searchResult,
    setSearchResult: setSearchResult,

    edit: edit,
    setEdit: setEdit,

    idEdit: idEdit,
    setEditId: setEditId,
  }


  useEffect(() => {
    axios
      .get(`http://backendexample.sanbercloud.com/api/movies`)
      .then((res) => {
        setMovieList(res.data);
      });
  }, []);


  return (
    <MovieListContext.Provider value={contextItems}>
      {props.children}
    </MovieListContext.Provider>
  );
};


