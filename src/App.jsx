import { Form, Header, Card, Navbar } from "./components";
import "./style/style.css";

function App() {
	return (
		<>
			<Navbar></Navbar>
			<div className="container">
				<div>
					<Header>Buat Catatan</Header>
					<Form></Form>
				</div>
				<div>
					<Header>Catatan Aktif</Header>
					<div className="card-container">
						<Card></Card>
						<Card></Card>
						<Card></Card>
						<Card></Card>
						<Card></Card>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
