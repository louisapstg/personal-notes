/* eslint-disable react/prop-types */
import Button from "../Button";
const CardButton = ({ deleteNotes, data, handleArchive }) => {
	return (
		<div className="card-button">
			<Button color={"#ff8fa3"} data={data} handle={deleteNotes}>
				Hapus
			</Button>
			<Button
				color={data.archived ? "#c7f9cc" : "#fcefb4"}
				data={data}
				handle={handleArchive}
			>
				{data.archived ? "Pindah" : "Arsip"}
			</Button>
		</div>
	);
};

export default CardButton;
