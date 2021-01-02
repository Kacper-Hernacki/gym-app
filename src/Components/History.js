import React from 'react';
import './History.css';
import HistoryRow from './HistoryRow';
import { Link } from 'react-router-dom';

function History() {
  return (
    <div className="history">
      <h1>History</h1>
      <div className="history__container">
        <Link
          style={{ color: 'inherit', textDecoration: 'inherit' }}
          to="/practice">
          <HistoryRow />
        </Link>
      </div>
    </div>
  );
}

export default History;
