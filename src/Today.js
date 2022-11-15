import React, { useState } from "react";
import Time from "./Time.js";
import Forecast from "./Forecast";
import "./Today.css";

export default function Today(props) {
	const [temp, setTemp] = useState(
		Math.round(props.query.data.temperature.current)
	);
	const [units, setUnits] = useState("metric");

	function convertFarenheit(event) {
		event.preventDefault();

		setTemp(Math.round(props.query.data.temperature.current * 1.8 + 32));
		setUnits("imperial");
	}

	function convertCelsius(event) {
		event.preventDefault();

		setTemp(Math.round(props.query.data.temperature.current));
		setUnits("metric");
	}

	function sendForecast() {
		let url = `https://api.shecodes.io/weather/v1/forecast?query=${props.query.data.city}&units=${units}&key=cd43b254add990tdecc360830of5f05d`;
		return url;
	}

	return (
		<div>
			<div className="row Today">
				<div className="col-lg-3 today-square">
					<div className="faded">Today in...</div>
					<h1>{props.query.data.city}</h1>
					<div className="faded">
						Updated <Time time={props.query.data.time} />
					</div>

					<div>
						<span className="today-temps">{temp}</span>
						<a
							href="/"
							className="celsius-link "
							onClick={convertCelsius}
						>
							°C |{" "}
						</a>
						<a
							href="/"
							className="farenheit-link"
							onClick={convertFarenheit}
						>
							°F
						</a>
					</div>
				</div>
				<div className="col-lg-3">
					<div>
						<img
							src={props.query.data.condition.icon_url}
							alt={props.query.data.condition.icon}
							className="today-icon"
						/>
					</div>
				</div>
				<div className="col-lg-4 today-details">
					<ul>
						<li>{props.query.data.condition.description}</li>
						<li>Wind: {Math.round(props.query.data.wind.speed)}km/hr</li>
						<li>
							Humidity: {Math.round(props.query.data.temperature.humidity)}%
						</li>
					</ul>
				</div>
			</div>
			<Forecast url={sendForecast()} />
		</div>
	);
}
