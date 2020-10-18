import React, { useContext } from "react";
import { MovieListContext } from "./MovieListContext";
import axios from "axios";

const MovieForm = () => {
    const {

        movieList,
        setMovieList,
        edit,
        idEdit,
        inputTitle,
        inputDescription,
        inputRating,
        inputDuration,
        inputGenre,
        inputYear,
        inputImageUrl,
        setEdit,
        setInputTitle,
        setInputDescription,
        setInputRating,
        setInputGenre,
        setInputDuration,
        setInputYear,
        setInputImageUrl,
        searchResult,
        setSearchResult
    } = useContext(MovieListContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const movieBaru = {
            title: inputTitle,
            description: inputDescription,
            year: inputYear,
            duration: inputDuration,
            genre: inputGenre,
            rating: inputRating,
            image_url: inputImageUrl,
        };

        if (!edit) {
            axios
                .post(`http://backendexample.sanbercloud.com/api/movies`, movieBaru)
                .then((res) => {
                    movieBaru.id = res.data.id;
                    setMovieList([...movieList, movieBaru]);

                    setInputTitle("");
                    setInputDescription("");
                    setInputYear(2020);
                    setInputDuration(120);
                    setInputGenre("");
                    setInputRating(0);
                    setInputImageUrl("");

                });
        } else {
            axios
                .put(
                    `http://backendexample.sanbercloud.com/api/movies/${idEdit}`,
                    movieBaru
                )
                .then((res) => {
                    setMovieList(
                        movieList.map((movie) => {
                            if (movie.id === idEdit) {
                                return {
                                    id: movie.id,
                                    title: inputTitle,
                                    description: inputDescription,
                                    year: inputYear,
                                    duration: inputDuration,
                                    genre: inputGenre,
                                    rating: inputRating,
                                    image_url: inputImageUrl,
                                };
                            } else {
                                return movie;
                            }
                        })
                    );
                    if (searchResult) {
                        setSearchResult(
                            searchResult.map((movie) => {
                                if (movie.id === idEdit) {
                                    return {
                                        id: movie.id,
                                        title: inputTitle,
                                        description: inputDescription,
                                        year: inputYear,
                                        duration: inputDuration,
                                        genre: inputGenre,
                                        rating: inputRating,
                                        image_url: inputImageUrl,
                                    };
                                } else {
                                    return movie;
                                }
                            })
                        )
                    }
                    setInputTitle("");
                    setInputDescription("");
                    setInputYear(2020);
                    setInputDuration(120);
                    setInputGenre("");
                    setInputRating(0);
                    setInputImageUrl("");
                    setEdit(false);
                    console.log("berhasil edit id :", idEdit);
                })
                .catch(() => {
                    alert("ada kesalahan data pada api");
                    window.location.reload();
                });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "inputTitle":
                setInputTitle(value);
                break;
            case "inputDescription":
                setInputDescription(value);
                break;
            case "inputGenre":
                setInputGenre(value);
                break;
            case "inputRating":
                setInputRating(value);
                break;
            case "inputYear":
                setInputYear(value);
                break;
            case "inputImageUrl":
                setInputImageUrl(value);
                break;
            case "inputDuration":
                setInputDuration(value);
                break;
            default:
                break;
        }
    };

    return (
        <React.Fragment>
            <h3 style={{ textAlign: "center", marginTop: "2rem" }}> Movies Form </h3>
            <form
                onSubmit={handleSubmit}

                className="formList"
            >
                <div className="form-input">
                    <label htmlFor="inputTitle">
                        Title:
        </label>
                    <input
                        type="text"
                        name="inputTitle"
                        value={inputTitle}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="inputDescription">
                        Description:
        </label>
                    <textarea name="inputDescription" value={inputDescription} onChange={handleChange} rows="4" cols="30">
                        {inputDescription}
                    </textarea>

                </div>

                <div className="form-input">
                    <label htmlFor="inputYear">
                        Year:
        </label>
                    <input
                        type="number"
                        name="inputYear"
                        value={inputYear}
                        onChange={handleChange}
                        min={1980}
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="inputDuration">
                        Duration:
        </label>
                    <input
                        type="number"
                        name="inputDuration"
                        value={inputDuration}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="inputGenre">
                        Genre:
        </label>
                    <input
                        type="text"
                        name="inputGenre"
                        value={inputGenre}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="inputRating">
                        Rating:
        </label>
                    <input
                        type="number"
                        name="inputRating"
                        value={inputRating}
                        onChange={handleChange}
                        min={0}
                        max={10}
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="inputImageUrl">
                        Image Url:
        </label>
                    <textarea name="inputImageUrl" value={inputImageUrl} onChange={handleChange} rows="4" cols="50">
                        {inputImageUrl}
                    </textarea>

                </div>
                <button>Submit</button>
            </form>
        </React.Fragment>
    );
};

export default MovieForm;
