import React from 'react';
import s from './Stats.module.css';

const itemStyles = [
  s.itemRed,
  s.itemBlue,
  s.itemOrangered,
  s.itemTeal,
  s.itemBlueviolet,
  s.itemGreen,
  s.itemChocolate,
  s.itemCrimson,
  s.itemCornflowerblue,
  s.itemRoyalblue,
  s.itemFirebrick
];

const RandomdIdx = () => Math.floor(Math.random() * itemStyles.length);

export const Stats = ({ title, stats }) => (
  <section className={s.section}>
    {title && <h2 className={s.title}>{title}</h2>}
    <ul className={s.statList}>
      {stats.map(el => (
        <li key={el.id} className={itemStyles[RandomdIdx()]}>
          <span className={s.label}>{el.label}</span>
          <span className={s.percentage}>{el.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);
export default Stats;
