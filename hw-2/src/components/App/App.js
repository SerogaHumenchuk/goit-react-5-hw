import React from 'react';
import Reader from '../Reader/Reader';
import publications from '../Reader/publications.json';
import MoviePage from '../MoviePage/MoviePage';
// import s from './App.module.css';

function App() {
  return (
    <div>
      <MoviePage />
      <Reader items={publications} />
    </div>
  );
}

export default App;
