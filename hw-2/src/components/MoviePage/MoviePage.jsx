import React, { Component } from 'react';
import s from './MoviePage.module.css';

import MovieGrid from './MovieGrid/MovieGrid';
import SearchBar from './SearchBar/SearchBar';
import moviesArr from './movies.json';

export default class MoviePage extends Component {
  state = {
    movies: moviesArr,
    filter: '',
  };

  filterTasks = () => {
    const { movies, filter } = this.state;
    if (filter.length === 0) return movies;

    return movies.filter(movie =>
      movie.title.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  handleFilterChange = ({ target }) => this.setState({ filter: target.value });

  render() {
    const { filter } = this.state;
    return (
      <div className={s.container}>
        <SearchBar value={filter} onChange={this.handleFilterChange} />
        <MovieGrid movies={this.filterTasks()} />
      </div>
    );
  }
}
