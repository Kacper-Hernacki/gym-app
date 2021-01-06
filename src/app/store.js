import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import trainingReducer from '../features/trainingSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    training: trainingReducer,
  },
});
