import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  value: 0,
  status: 'idle',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const testThunk = createAsyncThunk(
  'api/tasks',
  async () => {
      console.log("IN Thunk")
    const response = await axios.get('/api/tasks');
    // The value we return becomes the `fulfilled` action payload
    console.log("RESPONSE", response)
  }
);

export const testSlice = createSlice({
  name: 'test',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    test: {
      reducer: (state, action) => {
        state.push(action)
      },
      prepare: (text) => {
        const id = 1
        return { payload: { id, text } }
      },
    },
  }
});

export const { test} = testSlice.actions;


export default testSlice.reducer;
