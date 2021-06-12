import React, { createContext, useCallback, useEffect, useState } from "react"
import { Link, useHistory, useLocation } from "react-router-dom"
import Dropdown from "react-bootstrap/Dropdown"

import DropdownButton from "react-bootstrap/DropdownButton"

// export const gradeContext = createContext()

function TopNav(props) {
	const [gradeValue, setGradeValue] = useState({})
	const location = useLocation()
	const path = location.pathname

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
		</>
	)
}

export default TopNav
