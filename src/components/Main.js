import React, { useState, useEffect } from "react"
import DB from "../API.json"
import { useLocation } from "react-router-dom"
import RenderData from "./RenderData"

function Main(props) {
	const grade = props.grade
	const tech = props.tech
	const location = useLocation().pathname
	return (
		<>
			<RenderData grade={grade} tech={tech} />
		</>
	)
}

export default Main
