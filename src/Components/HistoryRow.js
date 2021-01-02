import React from 'react';
import './HistoryRow.css';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function HistoryRow() {
  return (
    <div className="historyRow">
      <KeyboardArrowDownIcon />
      <h2>Leg day</h2>
      <h2>12.12.2020</h2>
    </div>
  );
}

export default HistoryRow;
