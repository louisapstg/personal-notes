/* eslint-disable react/prop-types */
import Tab from "./Tab";

const TabLayout = ({ archivedNote, activeNote, handleArchive, deleteNotes, searchResult }) => {
	return (
		<div className="tab">
			<Tab
				content={"Catatan Aktif"}
				note={activeNote}
				deleteNotes={deleteNotes}
				handleArchive={handleArchive}
				container={"card-container"}
				tab={"tab-1"}
				searchResult={searchResult}
			/>
			<Tab
				content={"Arsip Catatan"}
				note={archivedNote}
				deleteNotes={deleteNotes}
				handleArchive={handleArchive}
				container={"arsip-container"}
				tab={"tab-2"}
				searchResult={searchResult}
			/>
		</div>
	);
};

export default TabLayout;
