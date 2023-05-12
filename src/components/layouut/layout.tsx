import { FC, PropsWithChildren } from "react";

import "./layout.scss";

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return <div className="layout">{children}</div>;
};

export { Layout };
