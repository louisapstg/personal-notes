import { useEffect, useState } from "react";
import { Navbar, Body } from "./components";
import "./style/style.css";
import { getInitialData } from "./utils";
import { useDebounce } from "use-debounce";

function App() {
	const [datas, setDatas] = useState(getInitialData);
	const [keyword, setKeyword] = useState("");
	const [searchResult, setSearchResult] = useState([]);
	const [debounceKeyword] = useDebounce(keyword, 0);

	useEffect(() => {
		if (debounceKeyword) {
			const results = performSearch(debounceKeyword);
			setSearchResult(results);
		} else {
			setSearchResult(datas);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [datas, debounceKeyword]);

	const performSearch = (keyword) => {
		const results = datas.filter((item) =>
			item.title.toLowerCase().includes(keyword.toLowerCase())
		);
		return results;
	};

	return (
		<>
			<Navbar keyword={keyword} setKeyword={setKeyword} />
			<Body datas={datas} setDatas={setDatas} searchResult={searchResult} />
		</>
	);
}

export default App;
