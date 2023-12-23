import React, { useState, useEffect } from "react";

import CommentModal from "./CommentModal";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function MyHome() {
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [dramaMovies, setDramaMovies] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMoviesByGenre(28, setActionMovies);
    getMoviesByGenre(35, setComedyMovies);
    getMoviesByGenre(18, setDramaMovies);
  }, []);

  async function getMoviesByGenre(genreId, setMovies) {
    try {
      const apiUrl = `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}`;
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjk5YTU5NWNiN2IzYTMxMmIzN2ZlMzBhMDc0ZGQxYyIsInN1YiI6IjY1ODU3NTRlMjIzZTIwNDBkNDk1NThkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8vzfiIXG5dQ93dPgkYFhbBTnv8Yy7TggnK0XFZsH2UU`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data.");
      }

      const data = await response.json();
      setMovies(data.results);
    } catch (e) {
      setError("Failed to fetch data. Please try again later.");
      console.error(e);
    }
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filterMoviesBySearchTerm = (movies) => {
    if (!searchTerm) return movies;
    return movies.filter((movie) =>
      movie.original_title.toLowerCase().includes(searchTerm)
    );
  };

  const handleImageClick = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  function renderMovies(movies) {
    const filteredMovies = filterMoviesBySearchTerm(movies);
    return filteredMovies.map((item) => (
      <div
        className="col-md-2 col-sm-4"
        key={item.id}
        onClick={() => handleImageClick(item)}
      >
        <div className="movie_item">
          <img
            style={{ width: "200px" }}
            src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
            alt={item.original_title}
          />
          <div className="movie_name text-light" style={{textAlign:'center'}}>
            {item.original_title ? item.original_title : item.original_name}
          </div>
        </div>
      </div>
    ));
  }

  return (
    <div className="flex-container">
      {error && <div className="error-message">{error}</div>}

      <InputGroup style={{ width: "20%", marginLeft: "70px" }}>
        <FormControl
          type="text"
          placeholder="Search Movies"
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </InputGroup>

      <div className="movie_section">
        <h2 style={{marginLeft:'20px'}} >Action Movies</h2>
        <div className="row" style={{marginLeft:'20px', marginRight:'20px'}} >{renderMovies(actionMovies)}</div>
      </div>

      <div className="movie_section">
        <h2 style={{marginLeft:'20px'}}>Comedy Movies</h2>
        <div className="row" style={{marginLeft:'20px', marginRight:'20px'}}>{renderMovies(comedyMovies)}</div>
      </div>

      <div className="movie_section">
        <h2 style={{marginLeft:'20px'}}>Drama Movies</h2>
        <div className="row" style={{marginLeft:'20px',marginRight:'20px'}}>{renderMovies(dramaMovies)}</div>
      </div>

      <CommentModal
        show={showModal}
        onHide={handleCloseModal}
        movie={selectedMovie}
      />
    </div>
  );
}

export default MyHome;
