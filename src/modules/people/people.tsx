import { Pagination } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import {Empty, Loading} from "../../components";
import { useActions } from "../../hooks";
import { getPeopleState } from "../../store";

import { PersonCard } from "./components";
import "./people.scss";

const People = () => {
	const { count, data, isLoading } = useSelector(getPeopleState);
	const { getPeople } = useActions();

	useEffect(() => {
		getPeople(1);
	}, [getPeople]);

	const hasLoading = isLoading && <Loading />;
	const hasData =
		!isLoading &&
    !!data.length &&
		data.map(({ name, image, id }) => (
			<PersonCard key={id} image={image} name={name} id={id} />
		));
  const hasEmpty = !isLoading && !data.length && <Empty />;
	const hasPagination = !!count && !!data.length && (
		<Pagination
			showSizeChanger={false}
			total={count}
			onChange={(page) => getPeople(page)}
		/>
	);

	return (
		<div className="people-wrapper">
			<div className="people-container">
				{hasLoading}
				{hasData}
			</div>
			{hasPagination}
      {hasEmpty}
		</div>
	);
};

export { People };
