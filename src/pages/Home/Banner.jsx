import { Menu, MenuHandler, MenuList, MenuItem, Button, Typography, Input } from "@material-tailwind/react";
import bannerImg from "../../assets/image/banner.png";
import TypingAnimation from "../../components/banner/TypingAnimation";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

const Banner = () => {
	const [isInputFocused, setIsInputFocused] = useState(false);
	const [openSearchMenu, setOpenSearchMenu] = useState(false);
	const [searchItem, setSearchItem] = useState("Review");
	const searchItems = [
		{
			id: 1,
			item: "Review",
		},
		{
			id: 2,
			item: "Salaries",
		},
		{
			id: 3,
			item: "Interview questions",
		},
		{
			id: 4,
			item: "About company",
		},
	];
	return (
		<div className="flex flex-col-reverse md:flex-row min-h-96 px-5 md:px-10  md:pt-10 mt-[4rem]">
			<div className="w-full md:w-1/2 flex flex-col justify-center gap-4 md:pr-5">
				<Typography className="text-3xl md:text-4xl font-bold">
					Bangladesh&apos;s No. 1 platform <br /> for <TypingAnimation />
				</Typography>
				<div className="md:hidden relative">
					<IoSearchOutline
						className="absolute w-5 h-5 z-10 left-2.5 top-2
					 text-gray-500"
					/>
					<Input
						type="text"
						placeholder="Which company or designation?"
						className="!border !border-green-500 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-green-700 focus:!border-t-green-700 focus:ring-green-900/10 rounded-full pl-10 "
						labelProps={{
							className: "hidden",
						}}
						containerProps={{ className: "min-w-[100px]" }}
					/>
				</div>
				<div
					tabIndex="0"
					className={`w-full h-14 mt-5 hidden md:flex items-center border rounded-full shadow-lg border-green-700 hover:ring-0   ${
						isInputFocused ? "border-green-700" : ""
					}`}
				>
					<IoSearchOutline className="w-6 h-6 m-4 text-gray-500 flex-none " />
					<input
						type="text"
						placeholder="Which company or designation?"
						className="outline-none flex-grow pr-1"
						onFocus={() => setIsInputFocused(true)}
						onBlur={() => setIsInputFocused(false)}
					/>
					<div className="flex-none m-auto  px-5 border-l-2 border-gray-300">
						<Menu placement="bottom" open={openSearchMenu} handler={setOpenSearchMenu}>
							<MenuHandler>
								<Button
									ripple={false}
									variant="text"
									className=" text-md capitalize outline-none py-1 flex items-center gap-5 px-2 hover:bg-transparent active:bg-transparent text-primary"
								>
									{searchItem}
									<MdOutlineKeyboardArrowDown
										className={`h-5 w-5 transition-transform ${openSearchMenu ? "rotate-180" : ""}`}
									/>
								</Button>
							</MenuHandler>
							<MenuList>
								<ul className="col-span-1 flex w-full flex-col gap-1 z-10 outline-none">
									{searchItems.map(({ item, id }) => (
										<div onClick={() => setSearchItem(item)} key={id}>
											<MenuItem className="flex items-center gap-1 py-1 hover:bg-primary hover:text-white">
												<p className="mb-1 font-semibold py-1">{item}</p>
											</MenuItem>
										</div>
									))}
								</ul>
							</MenuList>
						</Menu>
					</div>
				</div>
			</div>
			<div className="w-full md:w-1/2 hidden lg:flex justify-end">
				<img className="" src={bannerImg} />
			</div>
		</div>
	);
};

export default Banner;
