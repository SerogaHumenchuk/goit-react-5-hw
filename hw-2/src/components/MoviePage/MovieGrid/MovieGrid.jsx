import React from 'react';
import MovieGridItem from './MovieGridItem/MovieGridItem';
import s from './MovieGrid.module.css';

const MovieGrid = ({ movies }) => (
  <div className={s.movieGrid}>
    {movies.map(movie => (
      <MovieGridItem
        title={movie.title}
        posterUrl={movie.posterUrl}
        overview={movie.overview}
        key={movie.id}
      />
    ))}
  </div>
);

export default MovieGrid;
