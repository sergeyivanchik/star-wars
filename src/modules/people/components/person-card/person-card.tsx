import { Card } from "antd";
import { FC } from "react";
import { useHistory } from "react-router-dom";

import "./persn-card.scss";
import { IPersonCardProps } from "./person-card.types";

const PersonCard: FC<IPersonCardProps> = ({ name, image, id }) => {
	const { push } = useHistory();

	return (
		<Card
			hoverable
			// style={{ width: 340, height: 510 }}
			cover={<img alt={name} src={image} />}
			onClick={() => push(`/${id}`)}
		>
			<Card.Meta title={name} />
		</Card>
	);
};

export { PersonCard };
