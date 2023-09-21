// eslint-disable-next-line react/prop-types
const Button = ({ children, color }) => {
	return (
		<>
			<button style={{ backgroundColor: color }}>{children}</button>
		</>
	);
};

export default Button;
