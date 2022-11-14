import "./Search.css";
import React, { useState } from "react";
import axios from "axios";

export default function Search({ onQuery }) {
	function searchCity(event) {
		event.preventDefault();
		let city = event.target[0].value.toLowerCase().replace(/ /g, "");
		getWeather(city);
	}

	function retrieveLocation() {
		navigator.geolocation.getCurrentPosition(convertCoordinates);
	}

	function convertCoordinates(event) {
		let lat = event.coords.latitude;
		let lon = event.coords.longitude;
		let url = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=cd43b254add990tdecc360830of5f05d`;
		axios.get(url).then(updateWeather);
	}

	function getWeather(city) {
		let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=cd43b254add990tdecc360830of5f05d&units=metric`;

		axios.get(url).then(updateWeather);
	}
	function updateWeather(event) {
		onQuery(event);
	}

	return (
		<form
			className="search-form"
			autoComplete="off"
			onSubmit={searchCity}
		>
			<div className="input-group">
				<input
					type="text"
					className="form-control"
					placeholder="Search for a city"
					autoFocus
				/>
				<button
					className="btn btn-outline-secondary"
					id="search-city-button"
					type="submit"
				>
					Search
				</button>
				<button
					className="btn btn-outline-secondary"
					type="button"
					onClick={retrieveLocation}
				>
					Current
				</button>
			</div>
		</form>
	);
}
