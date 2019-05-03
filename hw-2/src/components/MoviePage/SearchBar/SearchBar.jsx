import React from 'react';
import s from './SearchBar.module.css';

const SearchBar = ({ value, onChange }) => (
  <div>
    <input type="text" onChange={onChange} value={value} className={s.input} />
    {console.log(value)}
  </div>
);

export default SearchBar;
