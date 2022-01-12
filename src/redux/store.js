import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userListReducer from "./userListSlice";
import userReducer from "./userSlice";

const store = configureStore({
    reducer: combineReducers({
        user: userReducer,
        userList: userListReducer,
    })
})

export default store
