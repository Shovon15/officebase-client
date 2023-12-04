import Banner from "./Banner";
import CompanyPage from "./company/CompanyPage";
import CompanySection from "./CompanySection";
import ExampleSvg from "./ExampleSvg";
import ExploreSections from "./exploreOfficebase/ExploreSections";

const HomePage = () => {
	return (
		<div>
			<Banner />
			<CompanySection />
			<CompanyPage />
			<ExploreSections />
			<ExampleSvg />
		</div>
	);
};

export default HomePage;
