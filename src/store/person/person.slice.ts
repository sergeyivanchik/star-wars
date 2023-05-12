import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getPerson } from "./person.actions";
import { IInitialState } from "./person.types";

const initialState: IInitialState = {
  isLoading: false,
  data: null,
};

const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    changePerson: (state, { payload }: PayloadAction<IInitialState['data']>) => {
      state.data = payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPerson.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPerson.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload;
      })
      .addCase(getPerson.rejected, (state) => {
        state.isLoading = false;
        state.data = null;
      });
  },
});

const { reducer, actions } = personSlice;

export { reducer, actions };
