import React from "react";
import Movis from "./Movis";

function Movies(props) {
  const { movies = [] } = props;
  return (
    <div className="movies">
      {movies.length ? (
        movies.map((item) => (
          <Movis key={item.imdbID} {...item} movies={movies} />
        ))
      ) : (
        <h3>Noting found</h3>
      )}
    </div>
  );
}

export default Movies;
