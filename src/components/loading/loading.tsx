import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { FC } from "react";

import "./loading.scss";
import { iLoadingProps } from "./loading.types";

const Loading: FC<iLoadingProps> = ({ fs = 54 }) => {
	const icon = <LoadingOutlined style={{ fontSize: fs }} spin />;

	return <Spin indicator={icon} />;
};

export { Loading };
