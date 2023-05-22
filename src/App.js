import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Home, MovieDetails } from "./routes";
import axios from "axios";

function App() {
  const [movieList, setmovieList] = useState([]);

  useEffect(() => {
    const api_key = "35e1b4f6";
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ed6644c047164beb3f3d1168199545df`
      )
      .then(function (response) {
        console.log(response.data.results);
        if (response.data.results.length > 0) {
          setmovieList(response.data.results);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  //video from online for help availble here https://www.youtube.com/watch?v=jc9_Bqzy2YQ

  

  return (
    <BrowserRouter>
      <div data-testid="app">
        <Navigation />

        <Routes>
          <Route path="/" element={<Home movieList={movieList} />} />
          <Route path="/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export { App };
