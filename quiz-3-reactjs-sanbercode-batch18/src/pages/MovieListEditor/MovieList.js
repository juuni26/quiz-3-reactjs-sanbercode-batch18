import React, { useContext } from "react";
import { MovieListContext } from "./MovieListContext";
import axios from "axios";

const MovieList = () => {

  const {
    movieList,
    setMovieList,
    setEdit,
    setEditId,
    setInputTitle,
    setInputDescription,
    setInputRating,
    setInputGenre,
    setInputDuration,
    setInputYear,
    setInputImageUrl,
    searchResult
  } = useContext(MovieListContext);

  const editMovie = (id) => {
    setEdit(true);
    setEditId(id);
    setInputTitle(movieList.filter((val) => val.id === id)[0].title);
    setInputDescription(movieList.filter((val) => val.id === id)[0].description);
    setInputRating(movieList.filter((val) => val.id === id)[0].rating);
    setInputGenre(movieList.filter((val) => val.id === id)[0].genre);
    setInputDuration(movieList.filter((val) => val.id === id)[0].duration);
    setInputYear(movieList.filter((val) => val.id === id)[0].year);
    setInputImageUrl(movieList.filter((val) => val.id === id)[0].image_url);
  };

  const deleteMovie = (id) => {
    axios
      .delete(`http://backendexample.sanbercloud.com/api/movies/${id}`)
      .then((res) => {
        setMovieList(movieList.filter((val) => val.id !== id));
      }).catch(() => {
        window.location.reload();
      });
  };

  const movieContent = (movies) => {
    return movies.map((row, index) => {
      return (
        <tr key={index}>
          <td>{+index + 1}</td>
          <td>{row.title}</td>
          <td>
            {row.description && row.description.split("").length > 30 ? row.description.split("").slice(0, 30).join('') + " ..." : row.description}</td>
          <td>{row.year}</td>
          <td>{row.duration}</td>
          <td>{row.genre}</td>
          <td>{row.rating}</td>
          <td>
            <button
              onClick={() => {
                editMovie(row.id);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                deleteMovie(row.id);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    })

  }
  return (
    <div className="table">
      <h2>Daftar Film</h2>
      <table>
        <thead >
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Description</th>
            <th>Year</th>
            <th>Duration</th>
            <th>Genre</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

          {movieList != null && !searchResult
            ? movieContent(movieList)
            : movieList != null && searchResult ? movieContent(searchResult) : ""}
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;
