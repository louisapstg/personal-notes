/* eslint-disable react/prop-types */

import Card from "./CardFolder/Card";

const CardList = ({ note, deleteNotes, handleArchive, container }) => {
	return (
		<div className={container}>
			{note.map((data) => (
				<Card
					key={data.id}
					data={data}
					deleteNotes={deleteNotes}
					handleArchive={handleArchive}
				/>
			))}
		</div>
	);
};

export default CardList;
