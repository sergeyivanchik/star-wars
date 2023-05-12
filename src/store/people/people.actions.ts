import { personAdapter, restApi } from "../../api";
import { notificationError } from "../../utils";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { IGetPeople } from "./people.types";

const getPeople = createAsyncThunk<IGetPeople, number>(
	"people/getList",
	async (page, thunkAPI) => {
		try {
			const {
				data: { results, count },
			} = await restApi.request({
				method: "GET",
				url: `/people?page=${page}`,
			});

			return { data: results.map(personAdapter), count };
		} catch (error) {
			notificationError(error);

			return thunkAPI.rejectWithValue(error);
		}
	}
);

export { getPeople };
