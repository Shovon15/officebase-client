import { Typography } from "@material-tailwind/react";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
const LINKS = [
	{
		title: "Product",
		items: ["Overview", "Features", "Solutions", "Tutorials"],
	},
	{
		title: "Company",
		items: ["About us", "Careers", "Press", "News"],
	},
	{
		title: "Resource",
		items: ["Blog", "Newsletter", "Events", "Help center"],
	},
];

const currentYear = new Date().getFullYear();

const Footer = () => {
	return (
		<footer className="relative w-full bg-green-500 py-5 md:py-10">
			<div className="mx-auto w-full max-w-7xl px-8">
				<div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
					<p className="mb-6 font-bold text-xl md:text-3xl">Officebase</p>
					<div className="grid grid-cols-3 justify-between gap-4">
						{LINKS.map(({ title, items }) => (
							<ul key={title}>
								<p className="mb-3 font-medium opacity-70 text-gray-400">{title}</p>
								{items.map((link) => (
									<li key={link}>
										<p className="py-1.5 font-normal transition-colors text-white hover:text-blue-gray-900 cursor-pointer">
											{link}
										</p>
									</li>
								))}
							</ul>
						))}
					</div>
				</div>
				<div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
					<Typography variant="small" className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0">
						&copy; {currentYear} Officebase. All Rights Reserved.
					</Typography>
					<div className="flex gap-4 text-blue-gray-900 sm:justify-center md:mr-10">
						<FaFacebookSquare className="w-5 h-5" />
						<IoLogoYoutube className="w-5 h-5" />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
