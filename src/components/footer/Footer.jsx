import footer from "../../assets/footer.png";
import "./footer.css";

const Footer = () => {
	return (
		<div className="footer">
			<p className="footerHeader">
				Inventing the perfect solution tailored for you
			</p>

			<p className="footerSubHeader">
				Our dedicated teams has securing new software solution ideals you need
				for your project.
			</p>

			<div className="footerIMG">
				<img src={footer} alt="footer" />
			</div>
		</div>
	);
};

export default Footer;
