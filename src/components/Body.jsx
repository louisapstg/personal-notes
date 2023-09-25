/* eslint-disable react/prop-types */
import Header from "./header";
import Form from "./Form";
import TabLayout from "./TabLayout.jsx";

const Body = ({ setDatas, searchResult }) => {
	const archivedNote = searchResult.filter((item) => item.archived);

	const activeNote = searchResult.filter((item) => !item.archived);

	const handleAddNotes = (note) => {
		setDatas((datas) => [...datas, note]);
	};

	const handleArchive = (id) => {
		setDatas((data) => {
			const updatedData = data.map((item) => {
				if (item.id === id) {
					return {
						...item,
						archived: !item.archived,
					};
				}
				return item;
			});
			return updatedData;
		});
	};

	const deleteNotes = (id) => {
		const newNotes = searchResult.filter((item) => item.id !== id);
		setDatas(newNotes);
	};
	return (
		<div className="container">
			<div>
				<Header>Buat Catatan</Header>
				<Form handleAddNotes={handleAddNotes}></Form>
			</div>
			<TabLayout
				archivedNote={archivedNote}
				activeNote={activeNote}
				handleArchive={handleArchive}
				deleteNotes={deleteNotes}
			/>
		</div>
	);
};

export default Body;
