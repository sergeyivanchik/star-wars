import { createSlice } from "@reduxjs/toolkit";

import { getPeople } from "./people.actions";
import { IInitialState } from "./people.types";

const initialState: IInitialState = {
	isLoading: false,
	data: [],
	count: 0,
};

const peopleSlice = createSlice({
	name: "people",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getPeople.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getPeople.fulfilled, (state, { payload: { data, count } }) => {
				state.isLoading = false;
				state.data = data || [];
				state.count = count || 0;
			})
			.addCase(getPeople.rejected, (state) => {
				state.isLoading = false;
				state.data = [];
				state.count = 0;
			});
	},
});

const { reducer } = peopleSlice;

export { reducer };
