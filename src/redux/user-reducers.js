import { combineReducers } from "@reduxjs/toolkit";
import { createReducer } from "@reduxjs/toolkit";

import { fetchAllUsers, fetchUser } from "./user-operations";

const allUsers = createReducer([], {
        [fetchAllUsers.fulfilled]:(_, {payload}) => payload.data
    }
)

const user = createReducer([], {
        [fetchUser.fulfilled]:(_, {payload}) => payload
    }
)

const isLoading = createReducer(true, {
    [fetchAllUsers.pending]:() => true,
    [fetchAllUsers.fulfilled]:() => false,
    [fetchAllUsers.rejected]:() => true,
    [fetchUser.pending]:() => true,
    [fetchUser.fulfilled]:() => false,
    [fetchUser.rejected]:() => true,
    }
)

export default combineReducers({
    allUsers,
    user, 
    isLoading
})