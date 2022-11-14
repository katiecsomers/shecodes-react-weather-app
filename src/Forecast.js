import React, { useEffect, useState } from "react";
import axios from "axios";
import DailyForecast from "./DailyForecast.js";
import "./Forecast.css";

export default function Forecast(props) {
	const [forecast, setForecast] = useState(null);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded(false);
	}, [props.city]);

	if (loaded) {
		return (
			<div className="row Forecast">
				{forecast.map(function (dailyWeather, index) {
					if (index < 5) {
						return (
							<div className="col-md">
								<DailyForecast forecast={dailyWeather} />
							</div>
						);
					} else {
						return null;
					}
				})}
			</div>
		);
	} else {
		let url = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=cd43b254add990tdecc360830of5f05d`;
		axios.get(url).then(displayForecast);

		function displayForecast(event) {
			setForecast(event.data.daily);
			setLoaded(true);
		}
	}
}
