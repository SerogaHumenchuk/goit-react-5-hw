import React from 'react';
import PricingItem from './PricingItem/PricingItem';
import s from './PricingPlan.module.css';

const PricingPlan = ({ items }) => (
  <ul className={s.pricingPlan}>
    <PricingItem items={items} />
  </ul>
);

export default PricingPlan;
