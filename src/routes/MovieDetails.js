import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MovieDetails() {
  const params = useParams();
  const [movie, setmovie] = useState(null);
  const [trailer, settrailer] = useState(null);
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
        if (response.data && response.data.results.length > 0) {
          let movie_trailer = response.data.results;
          let single_trailer = movie_trailer.find((a) =>
            a.name.includes("Official")
          );
          if (!single_trailer) {
            single_trailer = movie_trailer[0];
          }
          settrailer(single_trailer.key);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [params.id]);

  if (!movie) {
    return <>loading...</>;
  }

  return (
    <div>
      {/* <img
        width="300"
        height="300"
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
      /> */}
      <h1>{movie.original_title}</h1>
      {/* <p>height: {movie.height}</p>
      <p>weight: {movie.weight}</p> */}
      <div></div>
      {trailer && (
        <div>
          <iframe
            width="500"
            height="500"
            src={`https://www.youtube.com/embed/${trailer}`}
          ></iframe>
        </div>
      )}

      <div>
        <p>Stats:</p>
        <ul>
          <li> Rating: {movie.vote_average} </li>
          <li> Vote: {movie.vote_count}</li>
        </ul>
      </div>
    </div>
  );
}

export { MovieDetails };
