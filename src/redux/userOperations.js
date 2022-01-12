import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from '../services/axiosInstance'

export const fetchListUsers = createAsyncThunk('users/readUser', async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/user?limit=12')
      return response.data
    } catch (err) {
      rejectWithValue(err)
    }
  })

export const fetchUser = createAsyncThunk('users/readUser', async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`user/${userId}`)
      return response.data
    } catch (err) {
      rejectWithValue(err)
    }
  })
