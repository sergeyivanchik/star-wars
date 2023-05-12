import { Empty as EmptyAntd } from "antd";

import "./empty.scss";

const Empty = () => {
	return <EmptyAntd image={EmptyAntd.PRESENTED_IMAGE_SIMPLE} />;
};

export { Empty };
