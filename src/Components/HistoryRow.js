import React, { forwardRef } from 'react';
import './HistoryRow.css';
import { useDispatch } from 'react-redux';
import { setTraining } from '../features/trainingSlice';

const HistoryRow = forwardRef(
  ({ id, contents: { timestamp, trainingName } }, ref) => {
    const dispatch = useDispatch();
    return (
      <div
        onClick={() =>
          dispatch(
            setTraining({
              trainingId: id,
              trainingName: trainingName,
            })
          )
        }
        ref={ref}
        className="historyRow">
        <h2>{trainingName}</h2>
        <h2>{new Date(timestamp?.toDate()).toLocaleString()}</h2>
      </div>
    );
  }
);
export default HistoryRow;
