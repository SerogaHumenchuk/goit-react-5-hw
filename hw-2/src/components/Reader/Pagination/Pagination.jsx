import React from 'react';
import s from './Pagination.module.css';

const Pagination = ({ idx, items, onNextArticle, onPrevArticle }) => (
  <div className={s.container}>
    <p className={s.counter}>
      {idx + 1}/{items.length}
    </p>
    <section className={s.controls}>
      <button onClick={onPrevArticle} type="button" className={s.button}>
        Назад
      </button>

      <button onClick={onNextArticle} type="button" className={s.button}>
        Вперед
      </button>
    </section>
  </div>
);

export default Pagination;
