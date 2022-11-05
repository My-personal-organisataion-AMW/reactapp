import React from "react";
import movies from "./optionsMovies";
import Layout from "./Layout";

const Movies = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default Movies;
