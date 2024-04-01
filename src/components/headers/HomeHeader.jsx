import {
	DashSvg,
	DownSvg,
	EmailSvg,
	RegisterSvg,
	WhatsappSvg,
} from "../../assets/Svg";
import "./header.css";

const HomeHeader = () => {
	const bottomNavData = ["About Us", "Services", "Portfolio", "Developers"];

	return (
		<nav className="homeNav">
			<div className="topNav">
				<div className="navLeft">
					<button className="logo">Logo</button>

					<button className="socials">
						<span>
							<EmailSvg />
						</span>
						<span>Hello@riffutures.com</span>
					</button>

					<button className="socials">
						<span>
							<WhatsappSvg />
						</span>
						<span>+234 905 640 5260</span>
					</button>
				</div>

				<div className="navRight">
					<button className="socials">
						<span>
							<DashSvg />
						</span>
						<span>Dashboard</span>
					</button>

					<button className="socials active">
						<span>
							<RegisterSvg />
						</span>
						<span>Register</span>
					</button>
				</div>
			</div>

			<div className="bottomNav">
				<button className="homeButton">Home</button>

				<div className="bottomRightContainer">
					{bottomNavData.map((nav) => (
						<button className="bottomRightNav" key={nav}>
							<span>{nav}</span>

							<DownSvg />
						</button>
					))}
				</div>
			</div>
		</nav>
	);
};

export default HomeHeader;
