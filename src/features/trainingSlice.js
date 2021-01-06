import { createSlice } from '@reduxjs/toolkit';

export const trainingSlice = createSlice({
  name: 'training',
  initialState: {
    trainingId: null,
    trainingName: null,
  },
  reducers: {
    setTraining: (state, action) => {
      state.trainingId = action.payload.trainingId;
      state.trainingName = action.payload.trainingName;
    },
  },
});

export const { setTraining } = trainingSlice.actions;

export const selectTrainingName = (state) => state.training.trainingName;
export const selectTrainingId = (state) => state.training.trainingId;

export default trainingSlice.reducer;
