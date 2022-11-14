import React from "react";

export default function Time(time) {
	let current = new Date(time.time * 1000);

	let days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	let day = days[current.getDay()];
	let hour = current.getHours();
	if (hour < 10) {
		hour = `0${hour}`;
	}
	let minutes = current.getMinutes();
	if (minutes < 10) {
		minutes = `0${minutes}`;
	}

	return (
		<div>
			{day} {hour}:{minutes}
		</div>
	);
}
