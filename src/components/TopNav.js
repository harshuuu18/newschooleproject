import React, { createContext, useCallback, useEffect, useState } from "react"
import { Link, useHistory, useLocation } from "react-router-dom"
import Dropdown from "react-bootstrap/Dropdown"

import DropdownButton from "react-bootstrap/DropdownButton"

// export const gradeContext = createContext()

function TopNav(props) {
	const [grade, setGrade] = useState("")
	const [tech, setTech] = useState("")
	const [gradeValue, setGradeValue] = useState({})
	const location = useLocation()
	const path = location.pathname
	const newpath = `${path}`.split("/")
	const history = useHistory()
	useEffect(() => {}, [path])
	const changes1 = useCallback(() => {
		return path === "/1to1/india" ? <></> : <></>
	}, [path])

	return (
		<>
			<div className="top-nav">
				{/* <div className="top-nav-l"></div> */}
				{/* <div className="top-nav-l"></div> */}
			</div>
			<div
				className="filter-breadcrumb"
				style={path == "/" ? { display: "none" } : {}}>
				<div className="breadcrumb">
					<h2>{newpath[1]}</h2>

					{newpath[2] ? <h2>{">"}</h2> : <></>}
					<h2>{newpath[2]}</h2>

					{grade ? <h2>{">"}</h2> : <></>}
					<h2>{grade}</h2>
					{tech ? <h2>{">"}</h2> : <></>}

					<h2>{tech}</h2>
				</div>
				<div className="filters">
					<select
						name="grade"
						id="grade"
						placeholder="Grade"
						onChange={(e) => {
							props.changeGrade(e)
							console.log(e.target.value)
							setGrade(e.target.value)
						}}
						onClick={(e) => props.changeGrade(e)}>
                   {console.log(path)}
				    
						<option value="">Select Grade</option>
						<option value="1-2">1-2</option>
						<option value="3-4">3-4</option>
						<option value="5-6">5-6</option>
						<option value="7-8">7-8</option>
						<option value="9-12">9-12</option>
					</select>
              
					<select
						name="tech"
						id="tech"
						onChange={(e) => {
							props.changeTech(e)
							console.log(e.target.value)
							setTech(e.target.value)
						}}
						onClick={(e) => props.changeTech(e)}>
						<option value="">Select Tech</option>
						<option value="app">App</option>
						<option value="game">Game</option>
						<option value="gamewithai">Game with AI</option>
						<option value="web">Web</option>
						<option value="aiwithml">AI with ML</option>
						<option value="3dwithvr">3D Coding-VR</option>
						<option value="python-selfdrivingcar">Python</option>
					</select>
				</div>
			</div>
		</>
	)
}

export default TopNav
