import React, { useState } from "react";
import Time from "./Time.js";
import Forecast from "./Forecast";
import "./Today.css";

export default function Today(props) {
	const [temp, setTemp] = useState(
		Math.round(props.query.data.temperature.current)
	);
	console.log(props.query);

	function convertFarenheit(event) {
		event.preventDefault();
		setTemp(Math.round(props.query.data.temperature.current * 1.8 + 32));
	}

	function convertCelsius(event) {
		event.preventDefault();
		setTemp(Math.round(props.query.data.temperature.current));
	}

	return (
		<div>
			<div className="row">
				<div className="col-3 today">
					<div className="faded">Today in...</div>
					<h1>{props.query.data.city}</h1>
					<div className="faded">
						Updated <Time time={props.query.data.time} />
					</div>

					<div>
						<span id="today-temps">{temp}</span>
						<a
							href="/"
							className="celsius-link inactive"
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
				<div className="col-3">
					<div>
						<img
							src={props.query.data.condition.icon_url}
							alt={props.query.data.condition.icon}
						/>
					</div>
				</div>
				<div className="col-4 today-details">
					<ul>
						<li>{props.query.data.condition.description}</li>
						<li>Wind: {Math.round(props.query.data.wind.speed)}km/hr</li>
						<li>
							Humidity: {Math.round(props.query.data.temperature.humidity)}%
						</li>
					</ul>
				</div>
			</div>
			<Forecast city={props.query.data.city} />
		</div>
	);
}
