import { NotSvg } from "../../assets/Svg";
import img from "../../assets/logo.png";
import user from "../../assets/user.png";
import "./header.css";

const DashboardHeader = ({ setPage }) => {
	return (
		<div className="dashboardNav">
			<button className="logo" onClick={() => setPage("Home")}>
				<div className="logoImg">
					<img src={img} alt="logo" />
				</div>

				<span>REGA</span>
			</button>

			<div className="dashboardRightNav">
				<div className="dashboardUser">
					<span>Good Day Olawale</span>
					<span>Feb 29, 2024</span>
				</div>

				<div className="dashboardUserInfo">
					<NotSvg />

					<div className="dashboardUserDetails">
						<span>Olawale</span>

						<span className="dashboardUserID">
							<span>User DI:</span>
							Rega234567
						</span>
					</div>

					<div className="userImg">
						<img src={user} alt="user" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardHeader;
