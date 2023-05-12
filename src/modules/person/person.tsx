import { EditOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Empty, Image, Loading } from "../../components";
import { useActions } from "../../hooks";
import { getPersonState } from "../../store";

import { Field, Modal } from "./components";
import "./person.scss";
import { IPersonProps } from "./person.types";

const Person: FC<IPersonProps> = ({ id }) => {
	const [showModal, setShowModal] = useState(false);
	const { isLoading, data } = useSelector(getPersonState);
	const { getPerson } = useActions();

	useEffect(() => {
		getPerson(id);
	}, [getPerson, id]);

	const hasLoading = isLoading && <Loading />;
	const hasData = !isLoading && !!data && (
		<>
			<Image src={data.image} alt={data.name} />
			<div className="person-container">
				<div className="person-name">{data.name}</div>
				<Field title="Birth Year">{data.birth_year}</Field>
				<Field title="Height">{data.height}</Field>
				<Field title="Mass">{data.mass}</Field>
				<Field title="Gender">{data.gender}</Field>
				<Field title="Hair Color">{data.hair_color}</Field>
				<Field title="Skin Color">{data.skin_color}</Field>
				<Field title="Homeworld">
					<Image isSmall src={data.homeworld} />
				</Field>
				{!!data.films.length && (
					<Field title="Related Films">
						<div className="person-data">
							{data.films.map((f) => (
								<Image isSmall src={f} key={f} />
							))}
						</div>
					</Field>
				)}
				{!!data.vehicles.length && (
					<Field title="Related Vehicles">
						<div className="person-data">
							{data.vehicles.map((v) => (
								<Image isSmall src={v} key={v} />
							))}
						</div>
					</Field>
				)}
				{!!data.starships.length && (
					<Field title="Related Starships">
						<div className="person-data">
							{data.starships.map((s) => (
								<Image key={s} isSmall src={s} />
							))}
						</div>
					</Field>
				)}
				<Button
					type="primary"
					size="large"
					icon={<EditOutlined />}
					onClick={() => setShowModal(true)}
				>
					Change
				</Button>
				<Modal
					title="Change person"
					open={showModal}
					onCancel={() => setShowModal(false)}
				/>
			</div>
		</>
	);
	const hasEmpty = !isLoading && !data && <Empty />;

	return (
		<div className="person-wrapper">
			{hasLoading}
			{hasData}
			{hasEmpty}
		</div>
	);
};

export { Person };
