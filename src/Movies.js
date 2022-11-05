import React from "react";
import movies from "./optionsMovies";
import Nav from "./Nav";

const Movies = () => {
  return (
    <>
      <h2>Movies</h2>
      <table id="movies">
        <tr>
          <th>Movie</th>
          <th>Description</th>
        </tr>
        {movies.map(({ description, title }) => (
          <tr>
            <td>{title}</td>
            <td>{description}</td>
          </tr>
        ))}
      </table>
      <Nav />
    </>
  );
};

export default Movies;
