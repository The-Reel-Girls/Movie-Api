import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MovieDetails() {
  const params = useParams();
  const [movie, setmovie] = useState(null);
  useEffect(() => {
    const api_key = "35e1b4f6";
    console.log(params);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=ed6644c047164beb3f3d1168199545df`
      )
      .then(function (response) {
        console.log(response.data);
        if (response.data) {
          setmovie(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

      axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=ed6644c047164beb3f3d1168199545df`
      )
      .then(function (response) {
        console.log(response.data);
        if (response.data) {
          // setmovie(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [params.id]);

  if (!movie) {
    return <>loading...</>;
  }

  return (
    <div>
      <img
        width="300"
        height="300"
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
      />
      <h1>{movie.original_title}</h1>
      {/* <p>height: {movie.height}</p>
      <p>weight: {movie.weight}</p> */}
      <div>
        {/* <p>abilities:</p>
        <ul>
          {movie.abilities.map((ability) => (
            <li key={ability.ability.name}>
              <span>{ability.ability.name}</span>
            </li>
          ))}
        </ul> */}
      </div>

      <div>
        {/* <p>types:</p>
        <ul>
          {movie.types.map((type) => (
            <li key={type.type.name}>
              <span>{type.type.name}</span>
            </li>
          ))}
        </ul> */}
      </div>

      <div>
        <p>stats:</p>
        <ul>
         
            <li> rating: {movie.vote_average} </li>
            <li> vote: {movie.vote_count}</li>
         
        </ul>
      </div>
    </div>
  );
}

export { MovieDetails };
