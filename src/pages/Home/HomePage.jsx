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
			{/* <div>
				<object type="image/svg+xml" data={bannerSVG}>
					svg-animation
				</object>
			</div> */}
		</div>
	);
};

export default HomePage;
