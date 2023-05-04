import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home, MovieDetails } from './routes';

function App() {
  const [movieList, setmovieList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
      .then((res) => res.json())
      .then((data) => {
        setmovieList(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <BrowserRouter>
      <div data-testid='app'>
        <Navigation />

        <Routes>
          <Route path='/' element={<Home movieList={movieList} />} />
          <Route path='/:name' element={<MovieDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export { App };