/* eslint-disable react/prop-types */
import Tab from "./Tab";

const TabLayout = ({
	archivedNote,
	activeNote,
	handleArchive,
	deleteNotes,
	searchActive,
	searchArchived,
}) => {
	return (
		<div className="tab">
			<Tab
				content={"Catatan Aktif"}
				note={activeNote}
				searchResult={searchActive}
				deleteNotes={deleteNotes}
				handleArchive={handleArchive}
				container={"card-container"}
				tab={"tab-1"}
			/>
			<Tab
				content={"Arsip Catatan"}
				note={archivedNote}
				searchResult={searchArchived}
				deleteNotes={deleteNotes}
				handleArchive={handleArchive}
				container={"arsip-container"}
				tab={"tab-2"}
			/>
		</div>
	);
};

export default TabLayout;
