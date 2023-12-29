export const selectIsLogged = state => state.auth.isLogged;
export const selectIsLoading = state => state.auth.isLoading;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectUserName = state => state.auth.user.userName;
export const selectIsAdmin = state => state.auth.admin;
export const selectFavoriteCars = state => state.auth.favoriteCars;
