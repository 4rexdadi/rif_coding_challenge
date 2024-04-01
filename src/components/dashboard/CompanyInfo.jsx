import { useState } from "react";
import { ArrowSvg } from "../../assets/Svg";
import "./dashboard.css";

const CompanyInfo = () => {
	const [info, setInfo] = useState("Our Vision");
	const data = ["Our Vision", "Our Mission", "Our Objectives "];

	return (
		<div className="companyInfo">
			<p className="companyInfoHeader">Our Company&apos;s Journey</p>

			<div className="companyInfoCards">
				<div className="companyInfoLeft">
					{data.map((info) => (
						<button key={info} onClick={() => setInfo(info)}>
							<div>
								<div className="dot" />

								<p>{info}</p>
							</div>

							<ArrowSvg />
						</button>
					))}
				</div>

				<div className="companyInfoRight">
					<p className="companyInfoRightHeader">{info}</p>

					<p>
						Rega’s vision is to usher in a future where business and technology
						research in Africa thrives independently, free from reliance on
						foreign aid, support, or ridicule. We envision a continent where
						innovation and development are self-sustained, and where Rega stands
						as a trailblazer in futuristic research and innovation protection.
					</p>
				</div>
			</div>
		</div>
	);
};

export default CompanyInfo;
