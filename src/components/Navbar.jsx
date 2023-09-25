/* eslint-disable react/prop-types */
const Navbar = ({ keyword, setKeyword }) => {
	return (
		<div className="navbar">
			<div className="title">
				C<span>ATATAN</span>
			</div>
			<div>
				<form action="" className="container">
					<input
						type="text"
						placeholder="Cari Catatan..."
						name="search"
						value={keyword}
						onChange={(e) => setKeyword(e.target.value)}
					/>
				</form>
			</div>
		</div>
	);
};

export default Navbar;
