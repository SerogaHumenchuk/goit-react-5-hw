import React from 'react';
import Profile from '../Profile/Profile';
import Stats from '../Stats/Stats';
import PricingPlan from '../PricingPlan/PricingPlan';
import pricingPlanItems from '../PricingPlan/pricing-plan.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from '../TransactionHistory/transactions.json';
import './App.css';

const user = {
  name: 'Jacques Gluke',
  tag: '@jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};
const stats = [
  { id: 'id-1', label: '.docx', percentage: 22 },
  { id: 'id-2', label: '.pdf', percentage: 4 },
  { id: 'id-3', label: '.mp3', percentage: 17 },
  { id: 'id-4', label: '.psd', percentage: 47 },
  { id: 'id-5', label: '.pdf', percentage: 10 },
];

const App = () => {
  return (
    <div className="App">
      <Profile user={user} />
      <Stats title="Upload stats" stats={stats} />
      <PricingPlan items={pricingPlanItems} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
