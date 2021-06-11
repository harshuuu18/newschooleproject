import React from "react"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as RiIcons from "react-icons/ri"

export const SidebarData = [
	{
		title: "1:1",
		path: "/1to1",
		icon: <FaIcons.FaUserAlt />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "India",
				path: "/1to1/india",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "USA",
				path: "/1to1/usa",
				icon: <IoIcons.IoIosPaper />,
			},
		],
	},
	{
		title: "1:N",
		path: "/1ton",
		icon: <FaIcons.FaUserFriends />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "India",
				path: "/1ton/india",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
		],
	},
	{
		title: "School",
		path: "/school",
		icon: <FaIcons.FaSchool />,

		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Bootcamps",
				path: "/school/bootcamp",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "Webinar",
				path: "/school/webinar",
				icon: <IoIcons.IoIosPaper />,
			},
			// {
			//   title: 'Middle',
			//   path: '/school/middleeast',
			//   icon: <IoIcons.IoIosPaper />
			// }
		],
	},
]
