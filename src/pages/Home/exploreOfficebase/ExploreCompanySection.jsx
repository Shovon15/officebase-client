import { Button, Typography } from "@material-tailwind/react";
import searchIcon from "../../../assets/icon/search.png";
import exploreImg from "../../../assets/image/review.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
const ExploreCompanySection = () => {
	return (
		<div className="min-h-96 p-5 md:p-10 ">
			<p className="text-2xl font-bold flex justify-center items-center gap-2 pb-5 text-textPrimary">
				Explore Officebase
				<img className="w-7 h-7" src={searchIcon} />
			</p>
			<Typography variant="lead" className="text-center">
				Bangladesh&apos;s largest platform for company reviews, salaries, interview questions and more!
			</Typography>
			<div className="flex flex-col p-5 md:flex-row">
				<div className="mx-15">
					<img className="" src={exploreImg} alt="..." />
				</div>
				<div className="w-full md:w-1/2 flex flex-col justify-start md:justify-center gap-4 lg:px-10">
					<p className="text-xl md:Text-3xl pt-5 text-center md:text-start">
						Read company reviews to avoid career mistakes
					</p>
					<div className="flex md:justify-start  justify-center ">
						<Button
							size="md"
							variant="text"
							className="font-bold capitalize outline-none py-2 flex  items-center  gap-3 px-2 hover:bg-transparent active:bg-transparent  text-green-500 text-md lg:text-xl border-b-2 rounded-none border-green-500"
						>
							Explore company reviews
							<IoIosArrowRoundForward className="w-8 h-8" />
						</Button>
					</div>
					<div className="text-center md:text-start">
						<Link to="/company-review">
							<Button
								size="lg"
								variant="outlined"
								className="font-bold capitalize outline-none py-2 gap-3 px-2 hover:bg-transparent active:bg-transparent w-44 text-green-500 text-xl border-b-4 border-r-4 border-green-500 mt-5 md:mt-10 ring-0 focus:ring-0 hover:border-black hover:bg-green-800 active:bg-green-900 hover:text-white"
							>
								Write reviews
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExploreCompanySection;
