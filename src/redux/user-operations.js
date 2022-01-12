import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { API } from "../servises/API/API";
import { APP_ID } from "../servises/API/APP_ID";
import { LIMIT } from "../servises/API/LIMIT";

export const fetchAllUsers = createAsyncThunk('user/fetchAllUsers', async() => {
        const {data} = await axios.get(`${API}/?${LIMIT}`,
            {
                headers:{
                    'app-id': APP_ID
                }
            }
        );
        return data
})

export const fetchUser = createAsyncThunk('user/fetchUser', async(id) => {
        const {data} = await axios.get(`${API}/${id}`,
            {
                headers:{
                    'app-id': APP_ID
                }
            }
        );
        return data
})