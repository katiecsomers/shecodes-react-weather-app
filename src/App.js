import React, { useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";

import "./App.css";
import Search from "./Search";
import Today from "./Today";

export default function App() {
	const [query, setQuery] = useState(null);
	const [ready, setReady] = useState(false);

	if (ready) {
		return (
			<div className="App">
				<div className="container">
					<Today query={query} />
					<Search onQuery={setQuery} />
				</div>
				<footer>
					This project was coded by{" "}
					<a
						href="https://legendary-squirrel-36425c.netlify.app/"
						target={"_blank"}
						rel={"noreferrer"}
					>
						Katie C Somers
					</a>{" "}
					and is{" "}
					<a
						href="https://github.com/katiecsomers/shecodes-react-weather-app"
						target={"_blank"}
						rel={"noreferrer"}
					>
						open source.
					</a>
				</footer>
			</div>
		);
	} else {
		let url = `https://api.shecodes.io/weather/v1/current?query=kyoto&key=cd43b254add990tdecc360830of5f05d&units=metric`;
		axios
			.get(url)
			.then((response) => setQuery(response))
			.catch((err) => console.log(err));

		if (query !== null) {
			setReady(true);
		}

		return (
			<div className="App loading">
				<h1>
					Loading....
					<ReactLoading
						type="bubbles"
						color="purple"
						height={667}
						width={375}
					/>
				</h1>
			</div>
		);
	}
}
