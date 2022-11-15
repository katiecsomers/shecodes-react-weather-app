import React from "react";

export default function DailyForecast(props) {
	function maxTemp() {
		return Math.round(props.forecast.temperature.maximum);
	}

	function minTemp() {
		return Math.round(props.forecast.temperature.minimum);
	}

	function formatDay() {
		let time = new Date(props.forecast.time * 1000);
		let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

		return days[time.getDay()];
	}

	function iconURL() {
		return props.forecast.condition.icon_url;
	}

	return (
		<div>
			<h1>{formatDay()}</h1>
			<span>
				{minTemp()}/<span className="higher">{maxTemp()}°</span>
				<br />
				<img
					src={iconURL()}
					alt="weather icon"
				/>
			</span>
		</div>
	);
}
