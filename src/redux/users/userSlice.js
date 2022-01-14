import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from '../../API/axiosInstance'

export const fetchUser = createAsyncThunk('users/readUser', async (userId, { rejectWithValue }) => {
  try {
    const response = await axios.get(`user/${userId}`)
    return response.data
  } catch (err) {
    let error = err; 
    return rejectWithValue(error.response.data.error);
  }
})

const userSlice = createSlice({
  name: 'user',
  initialState: { entities: [], loading: 'idle', error: '' },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, _action) => {
      state.loading = 'pending'
    })
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = 'idle'
      state.entities = action.payload
    })
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = 'idle'
      state.error = action.payload
    })
  },
})

export const selectUser = (state) => state.user.entities;
export const selectUserIsLoading = (state) => state.user.loading;
export const selectUserError = (state) => state.user.error;

export default userSlice.reducer
