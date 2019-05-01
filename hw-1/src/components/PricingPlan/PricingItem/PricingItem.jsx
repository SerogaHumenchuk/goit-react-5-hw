import React from 'react';
import styled, { css } from 'styled-components';
import s from './PricingItem.module.css';

const PricingItem = ({ items }) => {
  const generateItem = (item, text) => {
    const Button = styled.button`
      font-size: 15px;
      letter-spacing: 1px;
      color: #ffffff;
      font-family: 'Oswald';
      font-weight: 400;
      height: 50px;
      width: 200px;
      border: 0;
      margin: 0 auto;
      background: ${item.color};
      color: white;
    `;
    return <Button>{text}</Button>;
  };
  const generateLabel = (item, text) => {
    const Label = styled.h2`
      font-size: 35px;
      letter-spacing: 2px;
      color: #c0c0c0;
      font-family: 'Oswald';
      font-weight: 400;
      margin: 0 0 10px 0;
      text-transform: uppercase;
      color: ${item.color};
    `;
    return <Label>{text}</Label>;
  };
  return (
    <>
      {items &&
        items.map(item => (
          <li key={item.label} className={s.pricingItem}>
            <img src={item.icon} alt="" className={s.icon} />
            {generateLabel(item, item.label)}
            {console.log(item.color)}
            <p className={s.capacity}>{item.capacity} STORAGE</p>
            <p className={s.description}>{item.description}</p>
            <p className={s.price}>${item.price}/MO</p>
            {generateItem(item, 'Get Started')}
          </li>
        ))}
    </>
  );
};
export default PricingItem;
