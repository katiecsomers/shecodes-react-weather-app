import React from "react";
import axios from "axios";

export default function Forecast(props) {
	let url = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=cd43b254add990tdecc360830of5f05d`;
	axios.get(url).then(displayForecast);

	function displayForecast(event) {
		console.log(event);
		let forecastData = event.data.daily;
		return forecastData;
	}

	return <div className="row forecast"></div>;
}
