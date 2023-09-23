import CardInfo from "./CardInfo";
import CardButton from "./CardButton";
// eslint-disable-next-line react/prop-types
const Card = ({ data, deleteNotes, handleArchive }) => {
	return (
		<div className="card">
			<CardInfo data={data}></CardInfo>
			<CardButton
				data={data}
				deleteNotes={deleteNotes}
				handleArchive={handleArchive}
			></CardButton>
		</div>
	);
};

export default Card;
