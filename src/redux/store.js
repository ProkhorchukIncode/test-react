import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userListReducer from "./users/userListSlice";
import userReducer from "./users/userSlice";

const store = configureStore({
    reducer: combineReducers({
        user: userReducer,
        userList: userListReducer,
    })
})

export default store
