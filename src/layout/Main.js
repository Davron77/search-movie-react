import { useState, useEffect } from "react";
//Import Components
import Movies from "../components/Movies";
import Loader from "../components/Loader";
import Search from "../components/Search";

function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.omdbapi.com/?apikey=8cbe9fcb&s=panda")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      });
  }, []);

  const searchMovies = (str, type = "all") => {
    setLoading(true);
    fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=8cbe9fcb&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      });
  };

  return (
    <div className="container content">
      <Search searchMovies={searchMovies} />
      {loading ? <Loader /> : <Movies movies={movies} />}
    </div>
  );
}

export default Main;
