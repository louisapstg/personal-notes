/* eslint-disable react/prop-types */
import Tab from "./Tab";

const TabLayout = ({ archivedNote, activeNote, handleArchive, deleteNotes }) => {
	return (
		<div className="tab">
			<Tab
				note={activeNote}
				deleteNotes={deleteNotes}
				handleArchive={handleArchive}
				container={"card-container"}
				tab={"tab-1"}
			/>
			<Tab
				note={archivedNote}
				deleteNotes={deleteNotes}
				handleArchive={handleArchive}
				container={"arsip-container"}
				tab={"tab-2"}
			/>
		</div>
	);
};

export default TabLayout;
