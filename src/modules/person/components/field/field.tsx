import { FC } from "react";

import "./field.scss";
import { IFieldProps } from "./field.types";

const Field: FC<IFieldProps> = ({ title, children }) => {
	return (
		<div className="field">
			<span>{title}:</span>
			{children}
		</div>
	);
};

export { Field };
