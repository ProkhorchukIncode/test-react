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

// const user = createReducer([], {
//         [fetchUser.fulfilled]:(_, {payload}) => console.log(payload)
//         // payload
//     }
// )

export default combineReducers({
    allUsers,
    user
})