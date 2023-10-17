import React from "react";
import { movies } from "../data";
function Movies() {

  const displaymovies = movies.map(movie => {
    return <div><h3> Name: {movie.title}</h3>
                <p>Time: {movie.time}</p>
          
                 Genres:<ul>
                           <li>{movie.genres[0]}</li>
                           <li>{movie.genres[1]}</li>
                           <li>{movie.genres[2]}</li>
                           {movie.genres.map((genre)=>(
                           <li key={genre}>{genre}</li>
                          ))}
                        </ul>
         </div>
        
  })
  return <div>
    <h1>Movies Page</h1>
    <div>
      {displaymovies}
    </div>
  </div>;

}

export default Movies;
