import Button from "./Button";
const Card = () => {
	return (
		<div className="card">
			<div className="card-info">
				<div className="card-title">Card Title</div>
				<div className="card-date">Kamis, 21 September 2023</div>
				<div className="card-note">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iusto, expedita
					maiores corrupti ea debitis facere reiciendis aliquid, mollitia at distinctio
					pariatur ipsum, facilis inventore error fugiat consequatur delectus bland.
				</div>
			</div>
			<div className="card-button">
				<Button color={"#ff8fa3"}>Hapus</Button>
				<Button color={"#fcefb4"}>Arsip</Button>
			</div>
		</div>
	);
};

export default Card;
