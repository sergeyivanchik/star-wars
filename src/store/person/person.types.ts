import { IPerson } from "../../types";

interface IInitialState {
	isLoading: boolean;
	data: IPerson | null;
}

export { IInitialState };
