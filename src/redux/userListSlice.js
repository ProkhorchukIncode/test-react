import { createSlice } from '@reduxjs/toolkit'

import { fetchListUsers } from './userOperations'

const userListSlice = createSlice({
  name: 'userList',
  initialState: { userList: [], loading: 'idle', error: '' },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchListUsers.pending, (state, _action) => {
      state.loading = 'pending'
    })
    builder.addCase(fetchListUsers.fulfilled, (state, action) => {
      state.loading = 'idle'
      state.userList = action.payload
    })
    builder.addCase(fetchListUsers.rejected, (state, action) => {
      state.loading = 'idle'
      state.error = action.error
    })
  },
})

export default userListSlice.reducer