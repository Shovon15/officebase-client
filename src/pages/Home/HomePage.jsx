import Banner from "./Banner";
import CompanyPage from "./company/CompanyPage";
import CompanySection from "./CompanySection";
import ExploreSections from "./exploreOfficebase/ExploreSections";

const HomePage = () => {
	return (
		<div>
			<Banner />
			<CompanySection />
			<CompanyPage />
			<ExploreSections />
		</div>
	);
};

export default HomePage;
