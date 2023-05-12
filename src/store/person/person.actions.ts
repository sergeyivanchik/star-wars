import { createAsyncThunk } from "@reduxjs/toolkit";

import { personAdapter, restApi } from "../../api";
import { notificationError } from "../../utils";

import { IPerson } from "@/types";

const getPerson = createAsyncThunk<IPerson, string>(
	"person/getOne",
	async (id, thunkAPI) => {
		try {
			const { data } = await restApi.request({
				method: "GET",
				url: `/people/${id}`,
			});

			return personAdapter(data);
		} catch (error) {
			notificationError(error);

			return thunkAPI.rejectWithValue(error);
		}
	}
);

export { getPerson };
