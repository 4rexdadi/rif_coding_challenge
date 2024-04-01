import hero from "../../assets/hero.png";
import "./hero.css";

const Hero = () => {
	return (
		<div className="hero">
			<div>
				<img src={hero} alt="hero" />
			</div>
		</div>
	);
};

export default Hero;
