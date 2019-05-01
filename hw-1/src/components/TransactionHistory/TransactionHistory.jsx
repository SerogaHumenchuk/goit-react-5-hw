import React from 'react';
// import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table class="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items &&
        items.map(item => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
    </tbody>
  </table>
);

export default TransactionHistory;
