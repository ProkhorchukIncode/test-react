export const selectUserList = (state) => state.userList.userList.data;
export const selectUser = (state) => state.user.entities;
export const selectUserIsLoading = (state) => state.user.loading;
export const selectUserListIsLoading = (state) => state.userList.loading;