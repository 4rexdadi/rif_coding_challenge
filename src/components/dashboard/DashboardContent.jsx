import { useState } from "react";
import {
	ContributionSvg,
	DashboardSvg,
	DownSvg,
	InvestmentSvg,
	StartUpSvg,
	StudentSvg,
	TableSvg,
} from "../../assets/Svg";
import "./dashboard.css";

const DashboardContent = () => {
	const [open, setOpen] = useState(1);

	const data = [
		{
			name: "Dashboard",
			icon: InvestmentSvg,
			contents: [],
		},
		{
			name: "Rega Table Window",
			icon: ContributionSvg,
			contents: ["Available Slot", "Wallet", "Settings"],
		},
		{
			name: "Contribution",
			icon: TableSvg,
			contents: [],
		},
		{
			name: "High Risk Investment",
			icon: DashboardSvg,
			contents: [],
		},
	];

	return (
		<div className="dashboardContent">
			<div className="dashSidebar">
				{data.map((nav, i) => (
					<div key={i} className="dashTabContainer">
						<button className="dashTabs" onClick={() => setOpen(i)}>
							<div className="dashTabName">
								{nav.icon()}

								<span>{nav.name}</span>
							</div>

							<div
								className="DownSvg"
								style={{ rotate: open === i ? "180deg" : "360deg" }}
							>
								<DownSvg />
							</div>
						</button>

						<div className="navContents">
							{open === i &&
								nav.contents.map((subNav, k) => (
									<div key={k} className={k === 0 ? "active" : ""}>
										<div>
											<span />
										</div>
										{subNav}
									</div>
								))}
						</div>
					</div>
				))}
			</div>

			<div className="cardContainer">
				<div className="card one">
					<p className="cardTitle">Startups & Entrepreneurs</p>

					<StartUpSvg />

					<p className="cardDetails">
						Utilize the alliance to acquire assets and increase profitability as
						startups and entrepreneurs.
					</p>
				</div>

				<div className="card two">
					<p className="cardTitle">Students</p>

					<StudentSvg />

					<p className="cardDetails">
						Access assets for scholarships and micro-enterprises, and join
						tech-enabled services.
					</p>
				</div>
			</div>
		</div>
	);
};

export default DashboardContent;
