import { useState } from "react";
import Dashboard from "./components/dashboard";
import Home from "./components/home/Home";

const App = () => {
	// Usually i would do this with React Router Dom, but for demo purposes and less dependencies i used this approach for page switch
	const [page, setPage] = useState("Home");

	return (
		<div className="wrapper">
			{page === "Home" && <Home setPage={setPage} />}

			{page === "Dashboard" && <Dashboard setPage={setPage} />}
		</div>
	);
};

export default App;
