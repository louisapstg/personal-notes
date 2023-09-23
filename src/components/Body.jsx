/* eslint-disable react/prop-types */
import Header from "./header";
import Form from "./Form";
import TabLayout from "./TabLayout.jsx";

const Body = ({ datas, setDatas, searchResult }) => {
	const archivedNote = datas.filter((item) => item.archived);

	const activeNote = datas.filter((item) => !item.archived);

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
		const newNotes = datas.filter((item) => item.id !== id);
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
				searchResult={searchResult}
			/>
		</div>
	);
};

export default Body;
