/* eslint-disable react/prop-types */
const Navbar = ({ handleSearchChange, search }) => {
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
						value={search}
						onChange={handleSearchChange}
					/>
				</form>
			</div>
		</div>
	);
};

export default Navbar;
