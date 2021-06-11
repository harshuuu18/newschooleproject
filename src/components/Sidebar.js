import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { SidebarData } from "./SidebarData"
import SubMenu from "./SubMenu"
import { IconContext } from "react-icons/lib"
import logo from './logo.png'

// import logo from '../../src/logo.jpeg';

const Nav = styled.div`
	background: #fff;
	height: 80px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	box-shadow: 0 6px 10px 0 rgb(0 0 0/18%);
`

const NavIcon = styled(Link)`
	margin-left: 2rem;
	font-size: 2rem;
	height: 80px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`

const SidebarNav = styled.nav`
	background-image: linear-gradient(0deg, #00c3ff, #0744ec);
	width: 15vw;
	height: 100vh;
	display: flex;
	justify-content: center;

	top: 0;
	left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
	transition: 350ms;
	z-index: 10;
	font-weight: 500;
`

const SidebarWrap = styled.div`
	width: 100%;
`

const Sidebar = () => {
	const [sidebar, setSidebar] = useState(true)

	const showSidebar = () => setSidebar(!sidebar)

	return (
		<>
			<IconContext.Provider value={{ color: "#fff" }}>
				<Nav></Nav>
				<SidebarNav sidebar={sidebar}>
					<SidebarWrap>
						<NavIcon to="/" onClick={() => window.location.reload()}>
							<img className="logo" width="210px" src={logo}></img>
							{/* <h2>LOGO</h2> */}
						</NavIcon>
						{SidebarData.map((item, index) => {
							return <SubMenu item={item} key={index} />
						})}
					</SidebarWrap>
				</SidebarNav>
			</IconContext.Provider>
		</>
	)
}

export default Sidebar
