import React from "react";
import PropTypes from 'prop-types';
import css from "./TransactionHistory.module.css";


const TransactionHistory = ({items}) => {
  return (
      <div className={css.tableContainer}>
        <table className={css.table}>
  <thead>
    <tr>
      <th className={css.th}>Type</th>
      <th className={css.th}>Amount</th>
      <th className={css.th}>Currency</th>
    </tr>
  </thead>
<tbody>
        {items.map(({ id, type, amount, currency }) =>(
          <tr key={id}
          className={type === 'withdrawal' ? css.withdrawal : css.invoice}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
       </tr>
       ))}         
  </tbody>
      </table>
      </div>
)}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,
        })
    ).isRequired
};

export default TransactionHistory;