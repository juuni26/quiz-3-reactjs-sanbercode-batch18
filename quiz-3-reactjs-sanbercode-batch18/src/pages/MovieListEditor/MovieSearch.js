import React, { useContext } from 'react';
import { MovieListContext } from './MovieListContext';

const MovieListSearch = () => {

    const {
        movieList,
        setMovieList,
        inputSearch,
        setInputSearch,
        setSearchResult

    } = useContext(MovieListContext);

    const handleSearch = (e) => {
        setInputSearch(e.target.value)
        console.log(inputSearch);
    };


    const searchButton = (e) => {
        console.log(inputSearch);
        e.preventDefault();
        if (inputSearch != "") {
            setSearchResult(
                movieList.filter((movie) => {
                    return movie.title.toLowerCase().includes(inputSearch.toLowerCase());
                })
            )
        }
        else {
            setSearchResult(null);
        }

    };

    return (
        <div className="movie-search">
            <input type="text" onChange={handleSearch} />
            <button onClick={searchButton}>Search</button>
        </div>
    );
};

export default MovieListSearch;
