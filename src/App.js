import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Home, MovieDetails } from "./routes";

function App() {
  const [movieList, setmovieList] = useState([]);

  useEffect(() => {
    fetch("http://www.omdbapi.com/?apikey=35e1b4f6&t=dog&page=10")
      .then((res) => res.json())
      .then((data) => {
        setmovieList(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //video from online for help availble here https://www.youtube.com/watch?v=jc9_Bqzy2YQ

  // const getMovieRequest = async (searchValue) => {
  //   const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

  //   const response = await fetch(url);
  //   const responseJson = await response.json();

  //   if (responseJson.Search) {
  //     setMovies(responseJson.Search);
  //   }
  // };

  // useEffect(() => {
  //   getMovieRequest(searchValue);
  // }, [searchValue]);

 

  return (
    <BrowserRouter>
      <div data-testid="app">
        <Navigation />

        <Routes>
          <Route path="/" element={<Home movieList={movieList} />} />
          <Route path="/:name" element={<MovieDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export { App };
