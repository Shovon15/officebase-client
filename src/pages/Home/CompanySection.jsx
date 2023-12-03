import { Button, Typography } from "@material-tailwind/react";
import conversationImg from "../../assets/image/conversation group.png";
import userIcon from "../../assets/icon/user.png";
import salaryIcon from "../../assets/icon/money.png";
import questionIcon from "../../assets/icon/question.png";
import reviewIcon from "../../assets/icon/satisfaction.png";
const CompanySection = () => {
	const items = [
		{
			icon: userIcon,
			text: "1 Crore+",
			desc: "Monthly Users",
		},
		{
			icon: salaryIcon,
			text: "2 Crore+",
			desc: "Salary Contributions",
		},
		{
			icon: reviewIcon,
			text: "55 Lakh+",
			desc: "Company Reviews",
		},
		{
			icon: questionIcon,
			text: "5 Lakh+",
			desc: "Interview Questions",
		},
	];
	return (
		<div className=" py-5 md:py-10">
			<div className="px-5 md:px-10 pb-10 cursor-pointer">
				<div className="flex bg-green-500 transform transition duration-300 hover:scale-110  rounded-2xl justify-between items-center px-5 lg:px-10 p-3">
					<div className="">
						<p className="text-xl md:text-3xl font-bold text-white">Anonymous career talk with real professionals</p>
						<Button variant="outlined" color="white" className=" rounded-full text-white mt-5">
							Conversation
						</Button>
					</div>
					<img className="w-96 hidden lg:block" src={conversationImg} />
				</div>
			</div>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2  lg:px-[4rem] lg:py-[2rem]">
				{items.map(({ text, desc, icon }) => (
					<div href="#" key={text} className="flex gap-2 justify-center">
						<div className=" p-2">
							<img src={icon} className="w-10 h-10" />
						</div>
						<div>
							<p className="mb-1 font-bold text-primary">
								{text}
							</p>
							<Typography variant="small" color="gray" className="font-normal">
								{desc}
							</Typography>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default CompanySection;
