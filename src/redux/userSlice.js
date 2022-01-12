import { createSlice } from '@reduxjs/toolkit'

import { fetchUser } from './userOperations'

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
      state.error = action.error
    })
  },
})

export default userSlice.reducer
