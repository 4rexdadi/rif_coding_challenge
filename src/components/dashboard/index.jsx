import DashboardHeader from "../headers/DashboardHeader";
import CompanyInfo from "./CompanyInfo";
import DashboardContent from "./DashboardContent";
import "./dashboard.css";

const Dashboard = ({ setPage }) => {
	return (
		<div>
			<header>
				<DashboardHeader setPage={setPage} />
			</header>

			<DashboardContent />

			<CompanyInfo />
		</div>
	);
};

export default Dashboard;
