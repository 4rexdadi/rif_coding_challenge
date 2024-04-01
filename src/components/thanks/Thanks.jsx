import { ThanksSvg } from "../../assets/Svg";
import "./thanks.css";

const Thanks = () => {
	return (
		<div className="thanksContainer">
			<div className="thanks">
				<div>
					<ThanksSvg />
				</div>

				<p>Thank you reach out to us our teams we get back you!</p>

				<button>Go back to Home</button>
			</div>
		</div>
	);
};

export default Thanks;
