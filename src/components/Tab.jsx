/* eslint-disable react/prop-types */
import CardList from "./CardList";
import Empty from "./Empty";
import Header from "./header";

const Tab = ({ note, deleteNotes, handleArchive, tab, container, searchResult, content }) => {
	console.log(searchResult);
	return (
		<div className={tab}>
			<Header>{content}</Header>
			{note.length > 0 ? (
				<CardList
					deleteNotes={deleteNotes}
					handleArchive={handleArchive}
					note={searchResult.length > 0 ? searchResult : note}
					container={container}
				/>
			) : (
				<Empty />
			)}
		</div>
	);
};

export default Tab;
