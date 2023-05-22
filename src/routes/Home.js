import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { MovieCard } from "../components";

function Home({ movieList }) {
  console.log(movieList);
  const [filteredMovie, setFilteredMovie] = useState([]);
  const [search, setSearch] = useState("");
  console.log(movieList);
  useEffect(() => {
    setFilteredMovie(
      movieList.filter((movie) =>
        movie.original_title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, movieList]);

  return (
    <Container>
      {
        <Row className="mb-4">
          <Col sm="8" md="6" className="mx-auto">
            <InputGroup>
              <InputGroup.Text id="search">Search</InputGroup.Text>
              <FormControl
                class="form-control rounded-pill"
                value={search}
                aria-label="search"
                aria-describedby="search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </InputGroup>
          </Col>
        </Row>
      }

      <Row className="g-4">
        {filteredMovie.map((movie) => (
          <Col key={movie.original_title}>
            <MovieCard moviedetails={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export { Home };
