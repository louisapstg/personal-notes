import Button from "./Button";
const Navbar = () => {
	return (
		<div className="navbar">
			<div className="title">
				C<span>ATATAN</span>
			</div>
			<div>
				<form action="" className="container">
					<input type="text" placeholder="Cari Catatan..." name="search" />
					<Button color={"#caf0f8"}>🔍</Button>
				</form>
			</div>
		</div>
	);
};

export default Navbar;
