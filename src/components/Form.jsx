/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";
const Form = ({ handleAddNotes }) => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const char = title.length;
	const titleCounter = 50 - char;

	const handleTitle = (e) => {
		if (char <= 49) {
			setTitle(e.target.value);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!title || !body) return;
		const id = crypto.randomUUID();
		const newData = {
			id,
			title,
			body,
			createdAt: new Date().toISOString(),
			archhived: false,
		};
		console.log(newData);
		handleAddNotes(newData);
		setTitle("");
		setBody("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<div className="title-counter">Sisa Karakter: {titleCounter}</div>
				<input type="text" placeholder="Judul..." value={title} onChange={handleTitle} />
				<textarea
					name="catatan"
					placeholder="Masukkan Catatanmu disini..."
					id="note"
					cols="30"
					rows="10"
					value={body}
					onChange={(e) => setBody(e.target.value)}
				></textarea>
			</div>
			<Button color={"#c7f9cc"}>Buat</Button>
		</form>
	);
};

export default Form;
