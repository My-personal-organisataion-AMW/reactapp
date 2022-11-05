import React from "react";
import movies from "./optionsMovies";
import Layout from "./Layout";

const Movies = () => {
  return (
    <Layout>
      <h2>Movies</h2>
      <table id="movies">
        <tbody>
          <tr>
            <th>No</th>
            <th>Movie</th>
            <th>Description</th>
          </tr>
          {movies.map(({ description, title }, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{title}</td>
              <td>{description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Movies;
