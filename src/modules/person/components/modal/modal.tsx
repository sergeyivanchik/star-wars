import { Input, Modal as ModalAntd, ModalProps, notification } from "antd";
import { FC, useState } from "react";
import { useSelector } from "react-redux";

import { useActions } from "../../../../hooks";
import { getPersonState } from "../../../../store";
import { notificationError } from "../../../../utils";

import "./modal.scss";
import { IPerson } from "@/types";

const Modal: FC<ModalProps> = ({
	title,
	open,
	onOk,
	onCancel,
	footer,
	closable = false,
	...restProps
}) => {
	const { data } = useSelector(getPersonState);
	const [person, setPerson] = useState(data);
	const { changePerson } = useActions();

	const changeInput = (field: string, value: string) =>
		setPerson({ ...person, [field]: value } as IPerson);

	const isValid =
		person?.name &&
		person?.birth_year &&
		person?.height &&
		person?.mass &&
		person?.gender &&
		person?.hair_color &&
		person?.skin_color;

	return (
		<ModalAntd
			title={title}
			open={open}
			onCancel={(e) => {
				setPerson(data);
				onCancel && onCancel(e);
			}}
			onOk={(e) => {
				if (isValid) {
					changePerson(person);
					notification.success({
						message: "Success",
						description: "Person has changed!",
					});
					onOk && onOk(e);
					onCancel && onCancel(e);
				} else {
					notificationError({ message: "Fill in all the fields!" }, "Failed");
				}
			}}
			{...restProps}
		>
			<Input
				status={!person?.name ? "error" : ""}
				placeholder="Input name"
				value={person?.name || ""}
				onChange={(e) => changeInput("name", e.target.value)}
			/>
			<Input
				status={!person?.birth_year ? "error" : ""}
				placeholder="Input birth year"
				value={person?.birth_year || ""}
				onChange={(e) => changeInput("birth_year", e.target.value)}
			/>
			<Input
				status={!person?.height ? "error" : ""}
				placeholder="Input height"
				value={person?.height || ""}
				onChange={(e) => changeInput("height", e.target.value)}
			/>
			<Input
				status={!person?.mass ? "error" : ""}
				placeholder="Input mass"
				value={person?.mass || ""}
				onChange={(e) => changeInput("mass", e.target.value)}
			/>
			<Input
				status={!person?.gender ? "error" : ""}
				placeholder="Input gender"
				value={person?.gender || ""}
				onChange={(e) => changeInput("gender", e.target.value)}
			/>
			<Input
				status={!person?.hair_color ? "error" : ""}
				placeholder="Input hair color"
				value={person?.hair_color || ""}
				onChange={(e) => changeInput("hair_color", e.target.value)}
			/>
			<Input
				status={!person?.skin_color ? "error" : ""}
				placeholder="Input skin color"
				value={person?.skin_color || ""}
				onChange={(e) => changeInput("skin_color", e.target.value)}
			/>
		</ModalAntd>
	);
};

export { Modal };
