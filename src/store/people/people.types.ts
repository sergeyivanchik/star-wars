import { IPerson } from "../../types";

interface IInitialState {
	isLoading: boolean;
	data: IPerson[];
	count: number;
}

interface IGetPeople {
	data: IPerson[];
	count: number;
}

export type { IInitialState, IGetPeople };
