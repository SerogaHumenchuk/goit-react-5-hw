import React from 'react';
import s from './MovieGridItem.module.css';

const MovieGridItem = ({ title, posterUrl, overview }) => (
  <div className={s.movieCard}>
    <img src={posterUrl} alt="" />
    <div className={s.content}>
      <h2>{title}</h2>

      <p>{overview}</p>
    </div>
  </div>
);

export default MovieGridItem;
