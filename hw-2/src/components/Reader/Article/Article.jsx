import React from 'react';

import s from './Article.module.css';

const Article = ({ item }) => (
  <section className={s.publication}>
    <h2 className={s.title}>{item.title}</h2>
    <p className={s.text}>{item.text}</p>
  </section>
);
export default Article;
