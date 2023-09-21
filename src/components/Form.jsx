import Button from "./Button";
const Form = () => {
	return (
		<form action="">
			<div>
				<input type="text" placeholder="Judul..." />
				<textarea
					name="catatan"
					placeholder="Masukkan Catatanmu disini..."
					id="note"
					cols="30"
					rows="10"
				></textarea>
			</div>
			<Button color={"#c7f9cc"}>Buat</Button>
		</form>
	);
};

export default Form;
