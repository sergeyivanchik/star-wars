import { createAsyncThunk } from "@reduxjs/toolkit";
import { toastr } from "react-redux-toastr";

import { restApi } from "@/api";
import { IGetPeopleRequest, IPerson } from "@/types";
import { toastError } from "@/utils";

const getPeople = createAsyncThunk<IPerson[], IGetPeopleRequest>(
	"people/getList",
	async ({ page = 1 }, thunkAPI) => {
		try {
			const response = await restApi.request({
				method: "GET",
				url: `?page=${page}`,
			});
			toastr.success("Get people", "Completed success!");

			return response.data;
		} catch (error) {
			toastError(error);
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export { getPeople };
