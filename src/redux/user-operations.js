import axios from "axios";
import { API } from "../servises/API/API";
import { APPid } from "../servises/API/APPid";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllUsers = createAsyncThunk('user/fetchAllUsers', async() => {
        const {data} = await axios.get(`${API}/?limit=10`,
            {
                headers:{
                    'app-id': APPid
                }
            }
        );
        return data
})

export const fetchUser = createAsyncThunk('user/fetchUser', async(id) => {
        const {data} = await axios.get(`${API}/${id}`,
            {
                headers:{
                    'app-id': APPid
                }
            }
        );
        return data
})