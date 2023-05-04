import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const params = useParams();
  const [movie, setmovie] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/movie/${params.name}`)
      .then((res) => res.json())
      .then((data) => {
        setmovie(data);
      });
  }, [params.name]);

  if (!movie) {
    return <>loading...</>;
  }

  return (
    <div>
      <img width="300" height="300" src={`https://img.moviedb.net/artwork/large/${params.name}.jpg`} />
      <h1>{params.name}</h1>
      <p>height: {movie.height}</p>
      <p>weight: {movie.weight}</p>
      <div>
        <p>abilities:</p>
        <ul>
          {movie.abilities.map((ability) => (
            <li key={ability.ability.name}>
              <span>{ability.ability.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p>types:</p>
        <ul>
          {movie.types.map((type) => (
            <li key={type.type.name}>
              <span>{type.type.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p>stats:</p>
        <ul>
          {movie.stats.map((stat) => (
            <li key={stat.stat.name}>
              <span>{stat.stat.name}: </span>
              <span>{stat.base_stat}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { MovieDetails };