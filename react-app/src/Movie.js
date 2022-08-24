import {Link} from "react-router-dom";
function Movie({movie}){
    return <div>
    <Link to={`/Detail/${movie.id}`}>
      <img src={movie.medium_cover_image}/>
    </Link>
    <h2>무비 이름 : {movie.title}</h2>
    <h3>장르</h3>
    <ol>
    {
      movie.genres.map(genre => (
        <li key={movie.id + genre}>{genre}</li>
      ))
    }
    </ol>
    <h3>summary</h3>
    <p>{movie.summary}</p>
  </div>
}
export default Movie;