/* eslint-disable react/prop-types */
import CardList from "./CardList";
import Empty from "./Empty";
import Header from "./header";

const Tab = ({ note, deleteNotes, handleArchive, tab, container }) => {
	return (
		<div className={tab}>
			<Header>Catatan Aktif</Header>
			{note.length > 0 ? (
				<CardList
					deleteNotes={deleteNotes}
					handleArchive={handleArchive}
					note={note}
					// note={searchResult.length > 0 ? searchResult : note}
					container={container}
				/>
			) : (
				<Empty />
			)}
		</div>
	);
};

export default Tab;
