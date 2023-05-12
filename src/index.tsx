import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as RouterProvider } from "react-router-dom";

import { App } from "./app";
import "./index.scss";
import { store } from "./store";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
		<ReduxProvider store={store}>
			<RouterProvider>
				<App />
			</RouterProvider>
		</ReduxProvider>
);
