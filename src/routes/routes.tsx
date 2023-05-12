import { Redirect, Route, Switch } from "react-router-dom";

import { People, Person } from "../modules";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={People} />
			<Route
				path="/:id"
				render={({ match }) => <Person id={match.params.id} />}
			/>

			<Redirect to="/" />
		</Switch>
	);
};

export { Routes };
