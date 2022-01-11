import { configureStore } from "@reduxjs/toolkit";

import users from "./user-reducers";

const store = configureStore({
    reducer: {
        users,
    }
})

export default store