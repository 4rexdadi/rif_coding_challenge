import { LeftArrowSvg } from "../../assets/Svg";
import press1 from "../../assets/press1.png";
import press3 from "../../assets/press3.png";

import "./press.css";

const Press = () => {
	const data = [
		{
			img: press1,
			info: "Why Riffutures invest in Abeokuta ",
		},
		{
			img: press3,
			info: "Rif Elite Global Alliance Report: The Future of Wealth Creation",
		},
		{
			img: press1,
			info: "Why Riffutures invest in Abeokuta ",
		},
	];

	return (
		<div className="press">
			<p className="pressHeader">Our Press Release</p>

			<p className="pressSubHeader">
				Stay updated with our latest offerings, innovations, and team updates.
			</p>

			<div className="pressCardContainer">
				{data.map((info, i) => (
					<div className="pressCard" key={i}>
						<div className="pressImg">
							<img src={info.img} alt={info.info} />
						</div>

						<p>{info.info}</p>

						<span />

						<button>
							Read More <LeftArrowSvg />
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Press;
