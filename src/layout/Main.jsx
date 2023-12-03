import { Header } from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import BottomHeader from "../components/bottomHeader/BottomHeader";
import Footer from "../components/footer/Footer";

const Main = () => {
	return (
		<div className="">
			<Header />
			<div className="max-w-[1300px] mx-auto ">
				<Outlet />
			</div>
			<Footer />
			{/* <BottomHeader /> */}
		</div>
	);
};

export default Main;
