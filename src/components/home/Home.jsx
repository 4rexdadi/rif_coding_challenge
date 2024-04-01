import Footer from "../footer/Footer";
import HomeHeader from "../headers/HomeHeader";
import Hero from "../hero/Hero";
import Press from "../press/Press";
import Thanks from "../thanks/Thanks";

const Home = ({ setPage }) => {
	return (
		<div>
			<header>
				<HomeHeader setPage={setPage} />
			</header>

			<Hero />

			<Press />

			<Thanks />

			<Footer />
		</div>
	);
};

export default Home;
