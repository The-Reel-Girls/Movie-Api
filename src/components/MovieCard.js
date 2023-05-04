import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function MovieCard({ name }) {
  const [movie, setmovie] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/movie/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setmovie(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [name]);

  return (
    <Card style={{ width: "18rem" }} className="mx-auto">
      <Card.Img
        width="286"
        height="286"
        bg="dark"
        variant="top"
        src={movie?.sprites.front_default}
      />
      <Card.Body>
        <Card.Title>
          <Link to={`/${name}`}>{name}</Link>
        </Card.Title>
        <Card.Text as="div">
          Abilities:
          <ul>
            {movie?.abilities.map((ability) => (
              <li key={ability.ability.name}>
                <span key={ability.ability.name}>{ability.ability.name}</span>
              </li>
            ))}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export { MovieCard };
