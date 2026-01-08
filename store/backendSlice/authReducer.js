import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    isLoggedIn: false,
    loading: false,
    error: null
};



const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action) {
            if (action.payload.user !== undefined) state.user = action.payload.user;
            if (action.payload.token !== undefined) state.token = action.payload.token;
            if (action.payload.wishlistCount !== undefined) state.wishlistCount = action.payload.wishlistCount;
            state.isLoggedIn = true;
        },
        logout(state) {
            state.user = null;
            state.token = null;
            state.isLoggedIn = false;
            state.loading = false;
            state.error = null;
            state.wishlistCount = 0;
        },
        deleteUser(state) {
            state.user = null;
            state.token = null;
            state.isLoggedIn = false;
            state.loading = false;
            state.error = null;
            state.wishlistCount = 0;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        }
    },
});

export const {
    login,
    logout,
    deleteUser,
    setLoading,
    setError
} = authSlice.actions;

export default authSlice.reducer;
