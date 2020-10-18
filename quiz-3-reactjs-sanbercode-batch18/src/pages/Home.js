import React, { useContext } from "react";
import axios from 'axios';

// Class component disini


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null
    }
  }

  componentDidMount() {
    axios
      .get(`http://backendexample.sanbercloud.com/api/movies`)
      .then((res) => {

        this.setState({
          content: res.data
        })

      })
  }

  movie() {
    if (this.state.content) {
      return this.state.content.map((movie,index) => {
        return (
          <div key={index}>
            <h3>{movie.title}</h3>
            <div className="movie-info">
              <img src={movie.image_url} alt={movie.title, "picture"} />
              <div className="movie-detail">
                <p>Rating : {movie.rating} </p>
                <p>Durasi : {movie.duration}</p>
                <p>Genre : {movie.genre}</p>
              </div>
            </div>
            <p className="movie-description">
              <strong>Deskripsi: </strong>
              {movie.description}
            </p>
          </div>
        )
      })
    }
  }


  render() {
    return (
      <section className="movie-section">
        <h1>Daftar Film Film Terbaik</h1>
        <div className="movie-list">
          {this.movie()}
        </div>
      </section>

    );
  }


}

export default Home;
