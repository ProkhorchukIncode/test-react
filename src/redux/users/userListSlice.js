import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from '../../API/axiosInstance'

export const fetchListUsers = createAsyncThunk('users/readListUser', async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/user?limit=12')
      return response.data
    } catch (err) {
      let error = err; 
      return rejectWithValue(error.response.data.error);
    }
  })

const userListSlice = createSlice({
  name: 'userList',
  initialState: { entities: [], loading: 'idle', error: '' },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchListUsers.pending, (state, _action) => {
      state.loading = 'pending'
    })
    builder.addCase(fetchListUsers.fulfilled, (state, action) => {
      state.loading = 'idle'
      state.entities = action.payload
    })
    builder.addCase(fetchListUsers.rejected, (state, action) => {
      state.loading = 'idle'
      state.error = action.payload
    })
  },
})

export default userListSlice.reducer