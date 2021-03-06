import { createSlice } from "@reduxjs/toolkit";
import { cookieTokenExists } from "../../Utils/UtilFunctions";

const isConnected = cookieTokenExists();
const initialState = {
	isConnected: isConnected,
	loading: false,
	error: null,
	isAdmin: false,
};

export const authenticationSlice = createSlice({
	name: "authenticate",
	initialState,
	reducers: {
		registerInit: (state) => {
			state.loading = true;
		},
		registerSuccess: (state) => {
			state.loading = false;
			state.error = "";
		},
		registerFail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},

		changePasswordInit: (state) => {
			state.loading = true;
		},
		changePasswordSuccess: (state) => {
			state.loading = false;
			state.error = "";
		},
		changePasswordFail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},

		loginInit: (state) => {
			state.loading = true;
		},
		loginSuccess: (state, action) => {
			state.loading = false;
			state.isConnected = true;
			state.isAdmin = action.payload;
			state.error = "";
		},
		loginFail: (state, action) => {
			state.loading = false;
			state.isConnected = false;
			state.error = action.payload;
		},

		logout: (state) => {
			state.isConnected = false;
			state.isAdmin = false;
			state.error = "";
		},
	},
});

export const {
	registerInit,
	registerSuccess,
	registerFail,
	loginInit,
	loginSuccess,
	loginFail,
	logout,
	changePasswordInit,
	changePasswordSuccess,
	changePasswordFail,
} = authenticationSlice.actions;

export default authenticationSlice.reducer;
