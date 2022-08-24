import {useState, useEffect} from "react";
import Movie from "../Movie.js";
function Home() {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const res = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")
    const json = await res.json();
    setMovies(json.data.movies);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log("this is printed");
  return (
    <div>
      <h1>영화 목록!</h1>
      {
        movies.map(movie => (
          <Movie movie={movie} key={movie.id}/>
        ))
      }
    </div>
  );
}
export default Home;