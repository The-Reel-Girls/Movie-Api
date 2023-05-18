import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";
function MovieCard({ moviedetails }) {
  const [movie, setmovie] = useState(null);
  useEffect(() => {
    // const api_key = "35e1b4f6";
    // axios
    //   .get(
    //     `https://api.themoviedb.org/3/search/movie?api_key=ed6644c047164beb3f3d1168199545df&query=${name}`
    //   )
    //   .then(function (response) {
    //     console.log(response.data.results);
    //     if (response.data.results.length > 0) {
    //       setmovie(response.data.results.at(-1));
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })
    //   .finally(function () {
    //     // always executed
    //   });
    // fetch(`http://www.omdbapi.com/?apikey=${api_key}&t=${name}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //    console.log(data);
    //     //setmovie(data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }, [name]);
  return (
    <Card style={{ width: "18rem" }} className="mx-auto">
      <Card.Img
        width="286"
        height="286"
        bg="dark"
        variant="top"
        src={`https://image.tmdb.org/t/p/w500/${moviedetails.backdrop_path}`}
      />
      <Card.Body>
        <Card.Title>
          <Link to={`/${moviedetails.id}`}>{moviedetails.original_title}</Link>
        </Card.Title>
        <Card.Text as="div">
          {/* Abilities: //i don't know what this is for*/}
          <ul>
            {/* {movie?.abilities.map((ability) => (
              <li key={ability.ability.name}>
                <span key={ability.ability.name}>{ability.ability.name}</span>
              </li>
            ))} */}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export { MovieCard };
