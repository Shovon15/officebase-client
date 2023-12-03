import React, { useState } from "react";
import {
	Navbar,
	Typography,
	Button,
	IconButton,
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
	Drawer,
	ListItem,
	ListItemPrefix,
	List,
	AccordionBody,
	AccordionHeader,
	Accordion,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";
import { showSuccessToast } from "../../../helper/ToastMessage";

import logo from "../../../assets/logo/officebase-logo.png";
import companyIcon from "../../../assets/icon/office-building.png";
import companyIcon2 from "../../../assets/icon/office-building 2.png";
import addReviewIcon from "../../../assets/icon/add-review.png";
import interviewIcon from "../../../assets/icon/question.png";
import salaryIcon from "../../../assets/icon/money.png";
import calcualtorIcon from "../../../assets/icon/calculator.png";
import moneyBagIcon from "../../../assets/icon/money-bag.png";
import salaryShareIcon from "../../../assets/icon/salaryShare.png";
import compareIcon from "../../../assets/icon/compare.png";
import addPhotoIcon from "../../../assets/icon/add-photo.png";

import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { BsBuildings } from "react-icons/bs";
import { VscPreview } from "react-icons/vsc";
import { GoDotFill } from "react-icons/go";

import "./header.css";

export function Header() {
	const [isOpenDrawer, setIsOpenDrawer] = useState(false);

	const openDrawer = () => setIsOpenDrawer(true);
	const closeDrawer = () => setIsOpenDrawer(false);

	const [openCompanyMenu, setOpenCompanyMenu] = useState(false);
	const [openReviewMenu, setOpenReviewMenu] = useState(false);
	const [openSalaryMenu, setOpenSalaryMenu] = useState(false);
	const [openContributeMenu, setOpenContributeMenu] = useState(false);

	const [open, setOpen] = React.useState(0);

	const handleOpen = (value) => {
		setOpen(open === value ? 0 : value);
	};

	React.useEffect(() => {
		window.addEventListener("resize", () => window.innerWidth >= 960 && setIsOpenDrawer(false));
	}, []);

	const companyMenuItems = [
		{
			id: 1,
			icon: companyIcon2,
			link: "/",
			title: "Companies",
			description: "Discover best price to work",
		},
		{
			id: 2,
			icon: compareIcon,
			link: "/",
			title: "Compare companies",
			description: "Compare & find best workplace",
		},
		{
			id: 3,
			icon: addPhotoIcon,
			link: "/",
			title: "Companies",
			description: "Discover best price to work",
		},
	];
	const reviewMenuItems = [
		{
			id: 1,
			icon: companyIcon,
			link: "/company",
			title: "Company reviews",
			description: "Read reviews for 6L+ companies",
		},
		{
			id: 2,
			icon: addReviewIcon,
			link: "/company-review",
			title: "Write a review",
			description: "Rate your former or current company",
		},
	];
	const salaryMenuItems = [
		{
			id: 1,
			icon: salaryIcon,
			link: "/",
			title: "Browse salaries",
			description: "Discover salaries for 6L+ companies",
		},
		{
			id: 2,
			icon: calcualtorIcon,
			link: "/",
			title: "Salary calculator",
			description: "Calculate your take home salary",
		},
		{
			id: 3,
			icon: moneyBagIcon,
			link: "/",
			title: "Are you paid fairly?",
			description: "Check your market value",
		},
		{
			id: 4,
			icon: salaryShareIcon,
			link: "/",
			title: "Share your salary",
			description: "Help other jobseekers",
		},
	];
	const contributeMenuItems = [
		{
			id: 1,
			icon: addReviewIcon,
			link: "/company-review",
			title: "Add Review",
			description: "Write a review",
		},
		{
			id: 2,
			icon: interviewIcon,
			link: "/",
			title: "Compare companies",
			description: "Share interview",
		},
		{
			id: 3,
			icon: salaryIcon,
			link: "/",
			title: "Companies2",
			description: "Contrubute salary",
		},
		{
			id: 4,
			icon: companyIcon,
			link: "/",
			title: "Companies3",
			description: "add office photo",
		},
	];

	const companyMenu = (
		<Menu
			animate={{
				mount: { y: 0 },
				unmount: { y: 25 },
			}}
			placement="bottom-end"
			open={openCompanyMenu}
			handler={setOpenCompanyMenu}
			allowHover
		>
			<MenuHandler>
				<Button
					size="sm"
					variant="text"
					className="flex items-center rounded-none text-base font-normal capitalize tracking-normal outline-none text-textPrimary hover:bg-primary hover:text-white"
				>
					Companies
					<MdOutlineKeyboardArrowDown
						className={`h-5 w-5 transition-transform ${openCompanyMenu ? "rotate-180" : ""}`}
					/>
				</Button>
			</MenuHandler>
			<MenuList className="hidden w-[26rem] grid-cols-1 gap-3 overflow-visible lg:grid shadow-xl relative">
				<div className="bg-white  w-5 h-5 absolute rotate-45 left-12 -top-1 outline-none"></div>
				<ul className="col-span-1 flex w-full flex-col gap-1 z-10 outline-none">
					{companyMenuItems.map(({ title, description, icon, link, id }) => (
						<Link to={link} key={id}>
							<MenuItem className="parent flex items-center gap-3 bg-green-50 hover:bg-primary">
								<div className="child bg-gray-200 hover:bg-white rounded-md p-3">
									<img src={icon} className="w-5 h-5" />
								</div>
								<div>
									<Typography variant="h6" color="blue-gray" className="mb-1">
										{title}
									</Typography>
									<Typography variant="small" color="gray" className="font-normal">
										{description}
									</Typography>
								</div>
							</MenuItem>
						</Link>
					))}
				</ul>
			</MenuList>
		</Menu>
	);
	const reviewMenu = (
		<Menu
			animate={{
				mount: { y: 0 },
				unmount: { y: 25 },
			}}
			placement="bottom-end"
			open={openReviewMenu}
			handler={setOpenReviewMenu}
			allowHover
		>
			<MenuHandler>
				<Button
					size="sm"
					variant="text"
					className="flex items-center rounded-none text-base font-normal capitalize tracking-normal outline-none text-textPrimary hover:bg-primary hover:text-white"
				>
					review
					<MdOutlineKeyboardArrowDown
						className={`h-5 w-5 transition-transform ${openReviewMenu ? "rotate-180" : ""}`}
					/>
				</Button>
			</MenuHandler>

			<MenuList className=" w-[26rem] grid-cols-1 gap-3 overflow-visible lg:grid shadow-xl relative ">
				<div className="bg-white  w-5 h-5 absolute rotate-45 left-12 -top-1 outline-none"></div>
				<ul className="col-span-1 flex w-full flex-col gap-1 z-10 outline-none">
					{reviewMenuItems.map(({ title, description, icon, link, id }) => (
						<Link to={link} key={id}>
							<MenuItem className="parent flex items-center gap-3 bg-green-50 hover:bg-primary">
								<div className="child bg-gray-200 hover:bg-white rounded-md p-3">
									<img src={icon} className="w-5 h-5" />
								</div>
								<div>
									<Typography variant="h6" color="blue-gray" className="mb-1">
										{title}
									</Typography>
									<Typography variant="small" color="gray" className="font-normal">
										{description}
									</Typography>
								</div>
							</MenuItem>
						</Link>
					))}
				</ul>
			</MenuList>
		</Menu>
	);
	const salaryMenu = (
		<Menu
			animate={{
				mount: { y: 0 },
				unmount: { y: 25 },
			}}
			placement="bottom-start"
			open={openSalaryMenu}
			handler={setOpenSalaryMenu}
			allowHover
		>
			<MenuHandler>
				<Button
					size="sm"
					variant="text"
					className="flex items-center rounded-none text-base font-normal capitalize tracking-normal outline-none text-textPrimary hover:bg-primary hover:text-white"
				>
					salary
					<MdOutlineKeyboardArrowDown
						className={`h-5 w-5 transition-transform ${openSalaryMenu ? "rotate-180" : ""}`}
					/>
				</Button>
			</MenuHandler>
			<MenuList className="hidden w-[26rem] grid-cols-1 gap-3 overflow-visible lg:grid shadow-xl relative ">
				<div className="bg-white  w-5 h-5 absolute rotate-45 left-12 -top-1 outline-none"></div>
				<ul className="col-span-1 flex w-full flex-col gap-1 z-10 outline-none">
					{salaryMenuItems.map(({ title, description, icon, link, id }) => (
						<Link to={link} key={id}>
							<MenuItem className="parent flex items-center gap-3 bg-green-50 hover:bg-primary">
								<div className="child bg-gray-200 hover:bg-white rounded-md p-3">
									<img src={icon} className="w-5 h-5" />
								</div>
								<div>
									<Typography variant="h6" color="blue-gray" className="mb-1">
										{title}
									</Typography>
									<Typography variant="small" color="gray" className="font-normal">
										{description}
									</Typography>
								</div>
							</MenuItem>
						</Link>
					))}
				</ul>
			</MenuList>
		</Menu>
	);
	const contributeMenu = (
		<Menu
			animate={{
				mount: { y: 0 },
				unmount: { y: 25 },
			}}
			placement="bottom"
			open={openContributeMenu}
			handler={setOpenContributeMenu}
			allowHover
		>
			<MenuHandler>
				<Button
					size="sm"
					className="rounded-full flex gap-1 items-center bg-green-500   text-base font-normal capitalize outline-none py-1.5 "
				>
					<MdAdd className="h-5 w-5" />
					contribute
				</Button>
			</MenuHandler>
			<MenuList className="hidden w-[26rem] grid-cols-1 gap-3 overflow-visible lg:grid shadow-xl relative">
				<div className="bg-white  w-5 h-5 absolute rotate-45 left-1/2 -top-1 outline-none"></div>
				<ul className="col-span-1 flex w-full flex-col gap-1 z-10 outline-none">
					{contributeMenuItems.map(({ title, description, icon, link, id }) => (
						<Link to={link} key={id}>
							<MenuItem className="parent flex items-center gap-3 bg-green-50 hover:bg-primary">
								<div className="child bg-gray-200 hover:bg-white rounded-md p-3">
									<img src={icon} className="w-5 h-5" />
								</div>
								<div>
									<Typography variant="h6" color="blue-gray" className="mb-1">
										{title}
									</Typography>
									<Typography variant="small" color="gray" className="font-normal">
										{description}
									</Typography>
								</div>
							</MenuItem>
						</Link>
					))}
				</ul>
			</MenuList>
		</Menu>
	);

	return (
		<div className="">
			<Navbar className=" fixed top-0 z-10 h-max max-w-full rounded-none px-0 py-0 border-none">
				<div className="flex items-center justify-between text-blue-gray-900 px-5 md:px-10 py-0">
					<div className="flex gap-4 items-center">
						<IconButton
							variant="text"
							className=" h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden "
							ripple={false}
							onClick={openDrawer}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</IconButton>
						<Link to="/" className="mr-4 cursor-pointer py-1.5 ">
							<img className="w-32" src={logo} />
						</Link>
					</div>
					<div className="flex items-center gap-1 md:gap-4">
						<div className="hidden lg:block ">{contributeMenu}</div>
						<Button variant="text" className="rounded-full px-3">
							<IoMdNotificationsOutline
								onClick={() => showSuccessToast("coming soon")}
								className="w-6 h-6"
							/>
						</Button>
						<div className="flex items-center gap-x-1">
							<Button
								variant="outlined"
								size="sm"
								className="capitalize rounded-full text-green-500 border-green-500 
								focus:ring-0 active:ring-0"
							>
								<span>Log In</span>
							</Button>
						</div>
					</div>
				</div>
				<div className="bg-gray-200 px-10  hidden lg:flex justify-between items-center">
					<div className="flex ">
						<Link to="/">
							<Button
								size="sm"
								variant="text"
								className="rounded-none text-base font-normal capitalize tracking-normal text-textPrimary hover:bg-primary hover:text-white"
							>
								Home
							</Button>
						</Link>
						{companyMenu}
						{reviewMenu}
						{salaryMenu}
						<Button
							size="sm"
							variant="text"
							className="rounded-none text-base font-normal capitalize tracking-normal text-textPrimary hover:bg-primary hover:text-white"
						>
							Community
						</Button>
					</div>
					<Link to="/employers">
						<p className="text-blue-500">for employers</p>
					</Link>
				</div>
			</Navbar>

			<Drawer open={isOpenDrawer} onClose={closeDrawer} className="p-4 fixed top-0">
				<div className="mb-6 flex items-center justify-between">
					<Typography variant="h5" color="blue-gray">
						OfficeBase
					</Typography>
					<IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2}
							stroke="currentColor"
							className="h-5 w-5"
						>
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</IconButton>
				</div>
				<div>
					<List>
						<Link to="/" onClick={() => setIsOpenDrawer(false)}>
							<ListItem className="border-b border-gray-400 rounded-none">
								<ListItemPrefix>
									<IoHomeOutline className="h-5 w-5" />
								</ListItemPrefix>
								Home
							</ListItem>
						</Link>
						<Accordion
							open={open === 1}
							icon={
								<MdOutlineKeyboardArrowDown
									className={`h-5 w-5 transition-transform ${open === 1 ? "rotate-180" : ""}`}
								/>
							}
						>
							<ListItem className="p-0 border-b border-gray-400 rounded-none" selected={open === 1}>
								<AccordionHeader
									onClick={() => handleOpen(1)}
									className={`border-b-0 p-3 ${open === 1 ? "bg-green-200" : ""}`}
								>
									<ListItemPrefix>
										<BsBuildings className="h-5 w-5" />
									</ListItemPrefix>
									<Typography color="blue-gray" className="mr-auto font-normal">
										Company
									</Typography>
								</AccordionHeader>
							</ListItem>
							<AccordionBody className="py-1">
								<List className="p-0">
									<ListItem>
										<ListItemPrefix>
											<GoDotFill strokeWidth={3} className="h-3 w-5" />
										</ListItemPrefix>
										coming soon
									</ListItem>

									<ListItem>
										<ListItemPrefix>
											<GoDotFill strokeWidth={3} className="h-3 w-5" />
										</ListItemPrefix>
										coming soon
									</ListItem>
									<ListItem>
										<ListItemPrefix>
											<GoDotFill strokeWidth={3} className="h-3 w-5" />
										</ListItemPrefix>
										coming soon
									</ListItem>
								</List>
							</AccordionBody>
						</Accordion>
						<Accordion
							open={open === 2}
							icon={
								<MdOutlineKeyboardArrowDown
									className={`h-5 w-5 transition-transform ${open === 2 ? "rotate-180 " : ""}`}
								/>
							}
						>
							<ListItem className="p-0 border-b border-gray-400 rounded-none" selected={open === 2}>
								<AccordionHeader
									onClick={() => handleOpen(2)}
									className={`border-b-0 p-3 ${open === 2 ? "bg-green-200" : ""}`}
								>
									<ListItemPrefix>
										<VscPreview className="h-5 w-5" />
									</ListItemPrefix>
									<Typography color="blue-gray" className="mr-auto font-normal">
										Review
									</Typography>
								</AccordionHeader>
							</ListItem>
							<AccordionBody className="py-1">
								<List className="p-0">
									<Link to="/company-review" onClick={() => setIsOpenDrawer(false)}>
										<ListItem>
											<ListItemPrefix>
												<img src={addReviewIcon} alt="..." className="w-5 h-5" />
											</ListItemPrefix>
											Write review
										</ListItem>
									</Link>
									<ListItem>
										<ListItemPrefix>
											<GoDotFill strokeWidth={3} className="h-3 w-5" />
										</ListItemPrefix>
										coming soon
									</ListItem>
								</List>
							</AccordionBody>
						</Accordion>
					</List>
				</div>
			</Drawer>
		</div>
	);
}
