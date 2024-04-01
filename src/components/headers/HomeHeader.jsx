import { useState } from "react";
import {
	DashSvg,
	DownSvg,
	EmailSvg,
	RegisterSvg,
	WhatsappSvg,
} from "../../assets/Svg";
import img from "../../assets/logo.png";
import "./header.css";

const HomeHeader = ({ setPage }) => {
	const [showMenu, setShowMenu] = useState(false);
	const bottomNavData = ["About Us", "Services", "Portfolio", "Developers"];

	return (
		<nav className="homeNav">
			<button
				onClick={() => setShowMenu((prev) => !prev)}
				className="hamburgerMenu"
			>
				<div />
				<div />
				<div />
			</button>

			<div className="topNav">
				<div className="navLeft">
					<button className="logoImg" onClick={() => setPage("Home")}>
						<img src={img} alt="logo" />
					</button>

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
					<button className="socials" onClick={() => setPage("Dashboard")}>
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

			<div className={showMenu ? "bottomNav" : "bottomNav showMenu"}>
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
