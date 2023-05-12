import { configureStore } from "@reduxjs/toolkit";

import * as peopleAsyncActions from "./people/people.actions";
import { reducer as peopleReducer } from "./people/people.slice";
import * as personAsyncActions from "./person/person.actions";
import { reducer as personReducer, actions as personActions } from "./person/person.slice";

const store = configureStore({
	reducer: {
		people: peopleReducer,
		person: personReducer,
	},
	devTools: true,
});

type TStore = ReturnType<typeof store.getState>;

const allActions = {
	...peopleAsyncActions,
	...personAsyncActions,
  ...personActions
};

export { store, allActions };
export type { TStore };
