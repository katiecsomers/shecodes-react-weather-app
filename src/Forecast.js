import React, { useEffect, useState } from "react";
import axios from "axios";
import DailyForecast from "./DailyForecast.js";
import "./Forecast.css";

export default function Forecast(props) {
	const [forecast, setForecast] = useState(null);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded(false);
	}, [props]);

	if (loaded) {
		return (
			<div className="row Forecast">
				{forecast.map(function (dailyWeather, index) {
					if (index < 5) {
						return (
							<div
								className="col-md"
								key={index}
							>
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
		axios.get(props.url).then(displayForecast);

		function displayForecast(event) {
			setForecast(event.data.daily);
			setLoaded(true);
		}
	}
}
