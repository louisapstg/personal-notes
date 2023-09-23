import { showFormattedDate } from "../../utils";

/* eslint-disable react/prop-types */
const CardInfo = ({ data }) => {
	const date = showFormattedDate(data.createdAt);
	return (
		<div className="card-info">
			<div className="card-title">{data.title}</div>
			<div className="card-date">{date}</div>
			<div className="card-note">{data.body}</div>
		</div>
	);
};

export default CardInfo;
