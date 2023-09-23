/* eslint-disable react/prop-types */
const Button = ({ children, color, handle, data }) => {
	return (
		<>
			<button style={{ backgroundColor: color }} onClick={() => handle(data.id)}>
				{children}
			</button>
		</>
	);
};

export default Button;
