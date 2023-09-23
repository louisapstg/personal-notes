import { useEffect, useState } from "react";
import { Navbar, Body } from "./components";
import "./style/style.css";
import { getInitialData } from "./utils";

function App() {
	const [datas, setDatas] = useState(getInitialData);
	const [search, setSearch] = useState("");
	const [searchResult, setSearchResult] = useState([]);

	useEffect(() => {
		const results = datas.filter((item) =>
			item.title.toLowerCase().includes(search.toLowerCase())
		);

		setSearchResult(results);
	}, [datas, search]);

	const handleSearchChange = (e) => {
		setSearch(e.target.value);
	};

	return (
		<>
			<Navbar handleSearchChange={handleSearchChange} search={search} />
			<Body datas={datas} setDatas={setDatas} searchResult={searchResult} />
		</>
	);
}

export default App;
